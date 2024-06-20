import * as graphql from "@nestjs/graphql";
import { ContactDto } from "../salesforceIntegration/ContactDto";
import { LeadDto } from "../salesforceIntegration/LeadDto";
import { TaskDto } from "../salesforceIntegration/TaskDto";
import { SalesforceIntegrationService } from "./salesforceintegration.service";

export class SalesforceIntegrationResolver {
  constructor(protected readonly service: SalesforceIntegrationService) {}

  @graphql.Mutation(() => String)
  async AuthenticateSalesforce(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.AuthenticateSalesforce(args);
  }

  @graphql.Query(() => String)
  async AuthenticateWithSalesforce(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.AuthenticateWithSalesforce(args);
  }

  @graphql.Query(() => String)
  async CreateContact(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateContact(args);
  }

  @graphql.Query(() => String)
  async CreateLead(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateLead(args);
  }

  @graphql.Mutation(() => ContactDto)
  async CreateNewContact(
    @graphql.Args()
    args: ContactDto
  ): Promise<ContactDto> {
    return this.service.CreateNewContact(args);
  }

  @graphql.Mutation(() => LeadDto)
  async CreateNewLead(
    @graphql.Args()
    args: LeadDto
  ): Promise<LeadDto> {
    return this.service.CreateNewLead(args);
  }

  @graphql.Mutation(() => TaskDto)
  async CreateNewTask(
    @graphql.Args()
    args: TaskDto
  ): Promise<TaskDto> {
    return this.service.CreateNewTask(args);
  }

  @graphql.Query(() => String)
  async CreateTask(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateTask(args);
  }

  @graphql.Mutation(() => String)
  async DeleteContact(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.DeleteContact(args);
  }

  @graphql.Mutation(() => String)
  async DeleteLead(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.DeleteLead(args);
  }

  @graphql.Mutation(() => String)
  async DeleteTask(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.DeleteTask(args);
  }

  @graphql.Query(() => String)
  async GetContact(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetContact(args);
  }

  @graphql.Query(() => String)
  async GetLead(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetLead(args);
  }

  @graphql.Query(() => String)
  async GetTask(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetTask(args);
  }

  @graphql.Query(() => ContactDto)
  async RetrieveContactById(
    @graphql.Args()
    args: string
  ): Promise<ContactDto> {
    return this.service.RetrieveContactById(args);
  }

  @graphql.Query(() => LeadDto)
  async RetrieveLeadById(
    @graphql.Args()
    args: string
  ): Promise<LeadDto> {
    return this.service.RetrieveLeadById(args);
  }

  @graphql.Query(() => TaskDto)
  async RetrieveTaskById(
    @graphql.Args()
    args: string
  ): Promise<TaskDto> {
    return this.service.RetrieveTaskById(args);
  }

  @graphql.Query(() => String)
  async UpdateContact(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.UpdateContact(args);
  }

  @graphql.Mutation(() => ContactDto)
  async UpdateExistingContact(
    @graphql.Args()
    args: ContactDto
  ): Promise<ContactDto> {
    return this.service.UpdateExistingContact(args);
  }

  @graphql.Mutation(() => LeadDto)
  async UpdateExistingLead(
    @graphql.Args()
    args: LeadDto
  ): Promise<LeadDto> {
    return this.service.UpdateExistingLead(args);
  }

  @graphql.Mutation(() => TaskDto)
  async UpdateExistingTask(
    @graphql.Args()
    args: TaskDto
  ): Promise<TaskDto> {
    return this.service.UpdateExistingTask(args);
  }

  @graphql.Query(() => String)
  async UpdateLead(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.UpdateLead(args);
  }

  @graphql.Query(() => String)
  async UpdateTask(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.UpdateTask(args);
  }
}
