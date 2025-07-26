<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\Request;

class TestimonialController extends Controller
{
    public function index()
    {
        return Testimonial::with('page')->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'page_id' => 'required|exists:pages,id',
            'name' => 'required|string|max:255',
            'photo' => 'nullable|string',
            'testimonial' => 'nullable|string',
        ]);

        $testimonial = Testimonial::create($validated);

        return response()->json($testimonial, 201);
    }

    public function show($id)
    {
        return Testimonial::with('page')->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $testimonial = Testimonial::findOrFail($id);

        $validated = $request->validate([
            'page_id' => 'sometimes|exists:pages,id',
            'name' => 'sometimes|string|max:255',
            'photo' => 'nullable|string',
            'testimonial' => 'nullable|string',
        ]);

        $testimonial->update($validated);

        return response()->json($testimonial);
    }

    public function destroy($id)
    {
        Testimonial::findOrFail($id)->delete();

        return response()->json(['message' => 'Testimonial berhasil dihapus']);
    }
}
