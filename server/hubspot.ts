import { Client } from "@hubspot/api-client";

const hubspotClient = new Client({ accessToken: process.env.HUBSPOT_ACCESS_TOKEN });

export interface HubSpotContact {
  email: string;
  firstname?: string;
  lastname?: string;
  phone?: string;
  company?: string;
  website?: string;
  message?: string;
  [key: string]: string | undefined;
}

export async function createHubSpotContact(contactData: HubSpotContact) {
  try {
    const properties: { [key: string]: string } = {};

    // Map all provided fields to HubSpot properties
    Object.entries(contactData).forEach(([key, value]) => {
      if (value !== undefined && value !== '') {
        properties[key] = value;
      }
    });

    const response = await hubspotClient.crm.contacts.basicApi.create({
      properties,
      associations: [],
    });

    console.log('HubSpot contact created:', response.id);
    return response;
  } catch (error: any) {
    console.error('HubSpot API error:', error.message);

    // If contact already exists, try to update instead
    if (error.message?.includes('Contact already exists')) {
      try {
        // Search for the contact by email
        const searchResponse = await hubspotClient.crm.contacts.searchApi.doSearch({
          filterGroups: [{
            filters: [{
              propertyName: 'email',
              operator: 'EQ',
              value: contactData.email
            }]
          }],
          properties: ['email'],
          limit: 1
        });

        if (searchResponse.results.length > 0) {
          const contactId = searchResponse.results[0].id;
          const properties: { [key: string]: string } = {};

          Object.entries(contactData).forEach(([key, value]) => {
            if (value !== undefined && value !== '') {
              properties[key] = value;
            }
          });

          const updateResponse = await hubspotClient.crm.contacts.basicApi.update(
            contactId,
            { properties }
          );

          console.log('HubSpot contact updated:', updateResponse.id);
          return updateResponse;
        }
      } catch (updateError) {
        console.error('Failed to update existing contact:', updateError);
        throw updateError;
      }
    }

    throw error;
  }
}
