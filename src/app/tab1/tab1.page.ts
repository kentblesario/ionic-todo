import { DeleteTodoService } from './../services/delete-todo.service';
import { AddTodoService } from './../services/add-todo.service';
import { CompleteTodoService } from './../services/complete-todo.service';
import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AddTodoPage } from '../modals/add-todo/add-todo.page';
import { GetTodoService } from '../services/get-todo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public title = 'Todo App';
  public todos: any[] = [];

  constructor(
    private modalCtrl: ModalController,
    public getTodoService: GetTodoService,
    public completeTodoService: CompleteTodoService,
    public addTodoService: AddTodoService,
    public deleteTodoService: DeleteTodoService,
    public alertController: AlertController
  ) { }

  changeTitle() {
    this.title = 'Home';
  }

  ionViewWillEnter() {
    this.getTodoList();
  }

  async getTodoList() {
    this.getTodoService.getTodoList().subscribe(async (res: any) => {
      console.log(res);
      if (res) {
        this.todos = res.data;
        console.log(this.todos);
      }
    });
  }

  async openAddTodo() {
    console.log('modal');
    const modal = await this.modalCtrl.create({
      component: AddTodoPage,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'submit') {
      console.log(data, role);
      this.addTodo(data);
    }
    console.log(data, role);
  }

  async addTodo(data) {
    console.log(data);
    this.addTodoService.addTodo(data).subscribe(async (res: any) => {
      if (res) {
        this.getTodoList();
      }
    });
  }

  async deleteTodo(todo) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm',
      message: 'Do you want to delete this todo?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (cancel) => {
            // console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Okay',
          handler: () => {
            this.confirmDeleteTodo(todo);
          },
        },
      ],
    });

    await alert.present();
  }

  async confirmDeleteTodo(todo) {
    this.deleteTodoService.deleteTodo(todo).subscribe(async (res: any) => {
      if (res) {
        this.getTodoList();
      }
    });
  }



  async complete(item) {
    let type;
    if (item.todoStatu === '2') {
      type = 1;
    } else {
      type = 2;
    }
    console.log(type);
    this.completeTodoService.completeTodo(item, type).subscribe(async (res: any) => {
      if (res) {
        this.getTodoList();
      }
    });
  }

}
