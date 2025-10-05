import { type InsertContact, type Contact, type InsertAudit, type Audit, type Newsletter, type InsertNewsletter } from "@shared/schema";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  createAudit(audit: InsertAudit): Promise<Audit>;
  subscribeNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
}

export class InMemoryStorage implements IStorage {
  private contacts: Contact[] = [];
  private audits: Audit[] = [];
  private newsletters: Newsletter[] = [];
  private contactIdCounter = 1;
  private auditIdCounter = 1;
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

  async createAudit(insertAudit: InsertAudit): Promise<Audit> {
    const audit: Audit = {
      id: this.auditIdCounter++,
      ...insertAudit,
      createdAt: new Date()
    };
    this.audits.push(audit);
    console.log('Audit request received:', audit);
    return audit;
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