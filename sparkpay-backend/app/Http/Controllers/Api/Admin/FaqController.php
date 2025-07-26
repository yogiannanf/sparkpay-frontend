<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Models\Faq;
use Illuminate\Http\Request;

class FaqController extends Controller
{
    public function index()
    {
        return Faq::with('page')->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'page_id' => 'required|exists:pages,id',
            'question' => 'required|string|max:255',
            'answer' => 'nullable|string',
        ]);

        $faq = Faq::create($validated);

        return response()->json($faq, 201);
    }

    public function show($id)
    {
        return Faq::with('page')->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $faq = Faq::findOrFail($id);

        $validated = $request->validate([
            'page_id' => 'sometimes|exists:pages,id',
            'question' => 'sometimes|string|max:255',
            'answer' => 'nullable|string',
        ]);

        $faq->update($validated);

        return response()->json($faq);
    }

    public function destroy($id)
    {
        Faq::findOrFail($id)->delete();

        return response()->json(['message' => 'FAQ berhasil dihapus']);
    }
}
