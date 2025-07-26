<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Models\Partner;
use Illuminate\Http\Request;

class PartnerController extends Controller
{
    public function index()
    {
        return Partner::with('page')->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'page_id' => 'required|exists:pages,id',
            'name' => 'required|string|max:255',
            'logo' => 'nullable|string',
            'description' => 'nullable|string',
        ]);

        $partner = Partner::create($validated);

        return response()->json($partner, 201);
    }

    public function show($id)
    {
        return Partner::with('page')->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $partner = Partner::findOrFail($id);

        $validated = $request->validate([
            'page_id' => 'sometimes|exists:pages,id',
            'name' => 'sometimes|string|max:255',
            'logo' => 'nullable|string',
            'description' => 'nullable|string',
        ]);

        $partner->update($validated);

        return response()->json($partner);
    }

    public function destroy($id)
    {
        Partner::findOrFail($id)->delete();

        return response()->json(['message' => 'Partner berhasil dihapus']);
    }
}