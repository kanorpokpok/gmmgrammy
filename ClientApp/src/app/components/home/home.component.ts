import { Component, OnInit } from '@angular/core';
import { ConfirmationService, ConfirmEventType, MegaMenuItem, MenuItem, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { AdduserdailogComponent } from '../dailog/user/adduserdailog/adduserdailog.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  arrays: Array<number> = new Array(24);
  items: MenuItem[] = [];
  settingitems: MegaMenuItem[] = [];
  artist_list: any[] = [];

  constructor(public dialogService: DialogService, private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home'
      },
      {
        label: 'Admin',
        icon: 'pi pi-user',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            { label: 'User', icon: 'pi pi-fw pi-user-plus' },
            { label: 'Filter', icon: 'pi pi-fw pi-filter' }
          ]
        },
        { label: 'Open', icon: 'pi pi-fw pi-external-link' },
        { separator: true },
        { label: 'Quit', icon: 'pi pi-fw pi-times' }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
        ]
      },
      {
        label: 'Help',
        icon: 'pi pi-fw pi-question',
        items: [
          {
            label: 'Contents',
            icon: 'pi pi-pi pi-bars'
          },
          {
            label: 'Search',
            icon: 'pi pi-pi pi-search',
            items: [
              {
                label: 'Text',
                items: [
                  {
                    label: 'Workspace'
                  }
                ]
              },
              {
                label: 'User',
                icon: 'pi pi-fw pi-file',
              }
            ]
          }
        ]
      },
      {
        label: 'Actions',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              { label: 'Save', icon: 'pi pi-fw pi-save' },
              { label: 'Update', icon: 'pi pi-fw pi-save' },
            ]
          },
          {
            label: 'Other',
            icon: 'pi pi-fw pi-tags',
            items: [
              { label: 'Delete', icon: 'pi pi-fw pi-minus' }
            ]
          }
        ]
      }
    ];

    this.settingitems = [{
      label: 'Settings', icon: 'pi pi-fw pi-cog',
      items: [
        [
          {
            label: 'Setting 1',
            items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
          },
          {
            label: 'Setting 2',
            items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }]
          },
          {
            label: 'Setting 3',
            items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }]
          }
        ],
        [
          {
            label: 'Technology 4',
            items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }]
          }
        ]
      ]
    }];

    // this.artist_list = this.arrays.map((value, index) => ({ artistId: index, nameTh: `ชื่อ${index}`, nameEn: `name${index}`, callNameTh: `call name${index}`, callNameEn: `call name${index}`, type: `ประเภท${index}` }));
    // console.log(this.arrays.map(e => e))
    for (let index = 0; index < this.arrays.length; index++) {
      this.artist_list.push({ artistId: index, nameTh: `ชื่อ${index}`, nameEn: `name${index}`, callNameTh: `call name${index}`, callNameEn: `call name${index}`, type: `ประเภท${index}` });
    }


  }

  // getEventData(event: any) {
  //   return event.target.value;
  //   // console.log(event.target.value)
  // }

  addArtist() {
    const ref = this.dialogService.open(AdduserdailogComponent, {
      header: 'Add New Artist',
      width: '70%'
    });
    ref.onClose.subscribe(respones => {
      if (respones) {
        respones.artistId = this.artist_list.length;
        this.artist_list.push(respones);
        this.messageService.add({ severity: 'success', summary: 'Confirmed', detail: 'Insert complete' });
        // console.log(respones)
      }
    });
  }

  removeArtist(id: number) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.artist_list.splice(this.artist_list.findIndex(e => e.artistId === id), 1);
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
      },
      reject: () => {
        this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
      }
    });
    // this.confirmationService.confirm({
    //   // target: event.target,
    //   message: 'Are you sure that you want to proceed?',
    //   icon: 'pi pi-exclamation-triangle',
    //   accept: () => {
    //     this.artist_list.splice(this.artist_list.findIndex(e => e.artistId === id), 1);
    //     this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
    //   },
    //   reject: () => {
    //     this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
    //   }
    // });

  }

  clear(table: Table) {
    table.clear();
  }

}
