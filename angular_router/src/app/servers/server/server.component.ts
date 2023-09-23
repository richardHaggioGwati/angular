import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string} | any;

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params['id'], 'Params')
        this.server = this.serversService.getServer(Number(params['id']));
    })
  }

  onEditServer()  {
  this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'})
}
}
