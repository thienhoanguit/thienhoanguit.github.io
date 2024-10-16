import { BaseModel } from "../infrastructure/base.model";

export class User extends BaseModel {
	displayName: string;
	email: string;
	photoURL: string;
	role: string[];
	isActive: boolean;
	constructor(
		displayName:string = '',
		email:string = '',
		photoURL:string = '',
		role:string[] = [],
		isActive:boolean = false,
		) {
		super();
		this.displayName = displayName;
		this.email = email;
		this.photoURL = photoURL;
		this.role = role;
		this.isActive = isActive;
	}
}