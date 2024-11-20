import { Routes } from "@angular/router";
import { TaskComponent } from "./tasks/task/task.component";
import { TasksComponent } from "./tasks/tasks.component";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { NotFoundError } from "rxjs";
import { NotFoundComponent } from "./not-found/not-found.component";

export const routs: Routes = [
    {
        path: '',
        component: NoTaskComponent,
    },
    {
        path:'user/:userId',
        component:UserTasksComponent,
        children: [
            {
                path: '',
                redirectTo: 'tasks',
                pathMatch: 'prefix'
            },
            {
                path: 'tasks',
                component:TasksComponent,
            },
            {
                path: 'tasks/new',
                component: NewTaskComponent,
            }
        ]
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];