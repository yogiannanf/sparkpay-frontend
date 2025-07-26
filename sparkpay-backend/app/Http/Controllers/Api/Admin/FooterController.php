<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Models\Footer;
use Illuminate\Http\Request;

class FooterController extends Controller
{
    public function index()
    {
        return Footer::with('page')->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'page_id' => 'required|exists:pages,id',
            'title' => 'required|string|max:255',
            'link' => 'nullable|url',
        ]);

        $footer = Footer::create($validated);

        return response()->json($footer, 201);
    }

    public function show($id)
    {
        return Footer::with('page')->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $footer = Footer::findOrFail($id);

        $validated = $request->validate([
            'page_id' => 'sometimes|exists:pages,id',
            'title' => 'sometimes|string|max:255',
            'link' => 'nullable|url',
        ]);

        $footer->update($validated);

        return response()->json($footer);
    }

    public function destroy($id)
    {
        Footer::findOrFail($id)->delete();

        return response()->json(['message' => 'Footer berhasil dihapus']);
    }
}
