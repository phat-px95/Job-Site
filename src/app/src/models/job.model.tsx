import { ICompanyInfo } from "./company-info.model";

export interface IJob {
	"id"?: string,
	"title"?: string,
	"type"?: JobTitle,
	"description"?: string,
	"location"?: string,
	"salary"?: string,
	"company"?: ICompanyInfo
  }

export type JobTitle = 'Full-Time' | 'Part-Time' | 'Remote' | 'Internship';
