import { type InsertContact, type Contact, type Newsletter, type InsertNewsletter } from "@shared/schema";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  subscribeNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
}

export class InMemoryStorage implements IStorage {
  private contacts: Contact[] = [];
  private newsletters: Newsletter[] = [];
  private contactIdCounter = 1;
  private newsletterIdCounter = 1;

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const contact: Contact = {
      id: this.contactIdCounter++,
      ...insertContact,
      createdAt: new Date()
    };
    this.contacts.push(contact);
    console.log('Contact received:', contact);
    return contact;
  }

  async subscribeNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const existing = this.newsletters.find(n => n.email === insertNewsletter.email);
    if (existing) {
      throw new Error("Email already exists in newsletter subscription");
    }
    
    const newsletter: Newsletter = {
      id: this.newsletterIdCounter++,
      ...insertNewsletter,
      subscribedAt: new Date()
    };
    this.newsletters.push(newsletter);
    console.log('Newsletter subscription:', newsletter);
    return newsletter;
  }
}

export const storage = new InMemoryStorage();