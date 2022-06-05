<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\TaskRequest;
use App\Models\Task;
use Illuminate\Http\Response;

class TaskController extends Controller
{
    public function createTask(TaskRequest $request)
    {
        Task::create($request->validated());
        return response(null, Response::HTTP_NO_CONTENT);
    }

    public function deleteTask(Task $task)
    {
        $task->delete();
        return response(null, Response::HTTP_NO_CONTENT);
    }

    public function updateTask(TaskRequest $request, Task $task)
    {
        $task->update($request->validated());
        return response(null, Response::HTTP_NO_CONTENT);
    }
}
