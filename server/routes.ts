import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertAuditSchema, insertNewsletterSchema } from "@shared/schema";
import { createHubSpotContact } from "./hubspot";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);

      // Store locally
      const contact = await storage.createContact(validatedData);

      // Send to HubSpot
      try {
        const nameParts = validatedData.name.split(' ');
        const firstname = nameParts[0];
        const lastname = nameParts.slice(1).join(' ') || undefined;

        await createHubSpotContact({
          email: validatedData.email,
          firstname,
          lastname,
          phone: validatedData.phone,
          company: validatedData.company,
          website: validatedData.website,
          service: validatedData.service,
          budget: validatedData.budget,
          timeline: validatedData.timeline,
          message: validatedData.message,
        });
      } catch (hubspotError) {
        console.error("HubSpot error (continuing anyway):", hubspotError);
        // Continue even if HubSpot fails - we still have the data locally
      }

      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({
        success: false,
        message: "Failed to send message. Please try again."
      });
    }
  });

  // Free Audit form submission
  app.post("/api/audit", async (req, res) => {
    try {
      const validatedData = insertAuditSchema.parse(req.body);

      // Store locally
      const audit = await storage.createAudit(validatedData);

      // Send to HubSpot
      try {
        const nameParts = validatedData.name.split(' ');
        const firstname = nameParts[0];
        const lastname = nameParts.slice(1).join(' ') || undefined;

        await createHubSpotContact({
          email: validatedData.email,
          firstname,
          lastname,
          phone: validatedData.phone,
          company: validatedData.company,
          website: validatedData.website,
          industry: validatedData.industry,
          monthlybudget: validatedData.monthlyBudget,
          goals: validatedData.goals,
          // Add a custom property to identify this as from the audit form
          lead_source: 'Free Audit Form',
        });
      } catch (hubspotError) {
        console.error("HubSpot error (continuing anyway):", hubspotError);
      }

      res.json({ success: true, message: "Audit request received! We'll contact you within 2 hours." });
    } catch (error) {
      console.error("Audit form error:", error);
      res.status(400).json({
        success: false,
        message: "Failed to submit audit request. Please try again."
      });
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      const newsletter = await storage.subscribeNewsletter(validatedData);

      // Send to HubSpot as well
      try {
        await createHubSpotContact({
          email: validatedData.email,
          lead_source: 'Newsletter',
        });
      } catch (hubspotError) {
        console.error("HubSpot error (continuing anyway):", hubspotError);
      }

      res.json({ success: true, message: "Successfully subscribed to newsletter!" });
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      if (error instanceof Error && error.message.includes("unique")) {
        res.status(400).json({
          success: false,
          message: "This email is already subscribed to our newsletter."
        });
      } else {
        res.status(400).json({
          success: false,
          message: "Failed to subscribe. Please try again."
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
