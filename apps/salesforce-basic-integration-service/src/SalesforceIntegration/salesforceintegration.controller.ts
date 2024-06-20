import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SalesforceIntegrationService } from "./salesforceintegration.service";
import { ContactDto } from "../salesforceIntegration/ContactDto";
import { LeadDto } from "../salesforceIntegration/LeadDto";
import { TaskDto } from "../salesforceIntegration/TaskDto";

@swagger.ApiTags("salesforceIntegrations")
@common.Controller("salesforceIntegrations")
export class SalesforceIntegrationController {
  constructor(protected readonly service: SalesforceIntegrationService) {}

  @common.Post("/authenticate")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AuthenticateSalesforce(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.AuthenticateSalesforce(body);
      }

  @common.Get("/:id/authenticate-with-salesforce")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AuthenticateWithSalesforce(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.AuthenticateWithSalesforce(body);
      }

  @common.Get("/:id/create-contact")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateContact(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreateContact(body);
      }

  @common.Get("/:id/create-lead")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateLead(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreateLead(body);
      }

  @common.Post("/new-contacts")
  @swagger.ApiOkResponse({
    type: ContactDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateNewContact(
    @common.Body()
    body: string
  ): Promise<ContactDto> {
        return this.service.CreateNewContact(body);
      }

  @common.Post("/new-leads")
  @swagger.ApiOkResponse({
    type: LeadDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateNewLead(
    @common.Body()
    body: string
  ): Promise<LeadDto> {
        return this.service.CreateNewLead(body);
      }

  @common.Post("/new-tasks")
  @swagger.ApiOkResponse({
    type: TaskDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateNewTask(
    @common.Body()
    body: string
  ): Promise<TaskDto> {
        return this.service.CreateNewTask(body);
      }

  @common.Get("/:id/create-task")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateTask(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreateTask(body);
      }

  @common.Delete("/contacts/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteContact(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.DeleteContact(body);
      }

  @common.Delete("/leads/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteLead(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.DeleteLead(body);
      }

  @common.Delete("/tasks/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteTask(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.DeleteTask(body);
      }

  @common.Get("/:id/get-contact")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetContact(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetContact(body);
      }

  @common.Get("/:id/get-lead")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetLead(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetLead(body);
      }

  @common.Get("/:id/get-task")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetTask(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetTask(body);
      }

  @common.Get("/retrieve-contact/:id")
  @swagger.ApiOkResponse({
    type: ContactDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RetrieveContactById(
    @common.Body()
    body: string
  ): Promise<ContactDto> {
        return this.service.RetrieveContactById(body);
      }

  @common.Get("/retrieve-lead/:id")
  @swagger.ApiOkResponse({
    type: LeadDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RetrieveLeadById(
    @common.Body()
    body: string
  ): Promise<LeadDto> {
        return this.service.RetrieveLeadById(body);
      }

  @common.Get("/retrieve-task/:id")
  @swagger.ApiOkResponse({
    type: TaskDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RetrieveTaskById(
    @common.Body()
    body: string
  ): Promise<TaskDto> {
        return this.service.RetrieveTaskById(body);
      }

  @common.Get("/:id/update-contact")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateContact(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.UpdateContact(body);
      }

  @common.Put("/update-contact/:id")
  @swagger.ApiOkResponse({
    type: ContactDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateExistingContact(
    @common.Body()
    body: string
  ): Promise<ContactDto> {
        return this.service.UpdateExistingContact(body);
      }

  @common.Put("/update-lead/:id")
  @swagger.ApiOkResponse({
    type: LeadDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateExistingLead(
    @common.Body()
    body: string
  ): Promise<LeadDto> {
        return this.service.UpdateExistingLead(body);
      }

  @common.Put("/update-task/:id")
  @swagger.ApiOkResponse({
    type: TaskDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateExistingTask(
    @common.Body()
    body: string
  ): Promise<TaskDto> {
        return this.service.UpdateExistingTask(body);
      }

  @common.Get("/:id/update-lead")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateLead(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.UpdateLead(body);
      }

  @common.Get("/:id/update-task")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateTask(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.UpdateTask(body);
      }
}
