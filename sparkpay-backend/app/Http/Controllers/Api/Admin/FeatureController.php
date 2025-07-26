<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Models\Feature;
use Illuminate\Http\Request;

class FeatureController extends Controller
{
    public function index()
    {
        return Feature::with('page')->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'page_id' => 'required|exists:pages,id',
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'icon' => 'nullable|string',
        ]);

        $feature = Feature::create($validated);

        return response()->json($feature, 201);
    }

    public function show($id)
    {
        $feature = Feature::with('page')->findOrFail($id);
        return response()->json($feature);
    }

    public function update(Request $request, $id)
    {
        $feature = Feature::findOrFail($id);

        $validated = $request->validate([
            'page_id' => 'sometimes|exists:pages,id',
            'title' => 'sometimes|string|max:255',
            'description' => 'nullable|string',
            'icon' => 'nullable|string',
        ]);

        $feature->update($validated);

        return response()->json($feature);
    }

    public function destroy($id)
    {
        $feature = Feature::findOrFail($id);
        $feature->delete();

        return response()->json(['message' => 'Fitur berhasil dihapus']);
    }
}
