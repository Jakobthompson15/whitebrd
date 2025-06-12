import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertNewsletterSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Failed to send message. Please try again." 
      });
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      const newsletter = await storage.subscribeNewsletter(validatedData);
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
