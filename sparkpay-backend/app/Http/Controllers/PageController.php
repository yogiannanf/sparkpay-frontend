<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;
use App\Http\Requests\StorePageRequest;
use App\Http\Requests\UpdatePageRequest;

class PageController extends Controller
{
    public function index()
    {
        return response()->json(Page::with('user')->latest()->get());
    }

    public function store(StorePageRequest $request)
    {
        $page = Page::create([
            'user_id' => auth()->id(),
            'title'   => $request->title,
            'slug'    => $request->slug,
            'content' => $request->content,
        ]);

        return response()->json([
            'message' => 'Page berhasil ditambahkan',
            'data' => $page,
        ]);
    }

    public function show(Page $page)
    {
        return response()->json($page);
    }

    public function update(UpdatePageRequest $request, Page $page)
    {
        $page->update($request->validated());

        return response()->json([
            'message' => 'Page berhasil diperbarui',
            'data' => $page,
        ]);
    }

    public function destroy(Page $page)
    {
        $page->delete();

        return response()->json(['message' => 'Page berhasil dihapus']);
    }
}
