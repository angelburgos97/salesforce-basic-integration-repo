import { Injectable } from "@nestjs/common";
import { ContactDto } from "../salesforceIntegration/ContactDto";
import { LeadDto } from "../salesforceIntegration/LeadDto";
import { TaskDto } from "../salesforceIntegration/TaskDto";

@Injectable()
export class SalesforceIntegrationService {
  constructor() {}
  async AuthenticateSalesforce(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async AuthenticateWithSalesforce(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateContact(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateLead(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateNewContact(args: ContactDto): Promise<ContactDto> {
    throw new Error("Not implemented");
  }
  async CreateNewLead(args: LeadDto): Promise<LeadDto> {
    throw new Error("Not implemented");
  }
  async CreateNewTask(args: TaskDto): Promise<TaskDto> {
    throw new Error("Not implemented");
  }
  async CreateTask(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async DeleteContact(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async DeleteLead(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async DeleteTask(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetContact(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetLead(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetTask(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async RetrieveContactById(args: string): Promise<ContactDto> {
    throw new Error("Not implemented");
  }
  async RetrieveLeadById(args: string): Promise<LeadDto> {
    throw new Error("Not implemented");
  }
  async RetrieveTaskById(args: string): Promise<TaskDto> {
    throw new Error("Not implemented");
  }
  async UpdateContact(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UpdateExistingContact(args: ContactDto): Promise<ContactDto> {
    throw new Error("Not implemented");
  }
  async UpdateExistingLead(args: LeadDto): Promise<LeadDto> {
    throw new Error("Not implemented");
  }
  async UpdateExistingTask(args: TaskDto): Promise<TaskDto> {
    throw new Error("Not implemented");
  }
  async UpdateLead(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UpdateTask(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
