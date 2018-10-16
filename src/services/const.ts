import { Injectable } from '@angular/core';


@Injectable()
export class ConstData {
	public apiAddress = 'http://vanwertworks.com/api';
	public jobsUrl = this.apiAddress+'/careers.php';
	public eventsUrl = this.apiAddress+'/events.php';
  public newsUrl = 'https://vanwertworks.com/blog/api/get_posts/';

  public filterUrl = "http://vanwertworks.com/api/options.php?id=";

  private userphoto: string= '';

  constructor() {

  }

  
}
