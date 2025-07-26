<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\Api\Admin\FeatureController;
use App\Http\Controllers\API\Admin\PartnerController;
use App\Http\Controllers\Api\Admin\TestimonialController;
use App\Http\Controllers\API\Admin\FaqController;
use App\Http\Controllers\API\Admin\FooterController;


// Login Admin
Route::post('/admin/login', function (Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    $user = User::where('email', $request->email)->first();

    if (! $user || ! Hash::check($request->password, $user->password)) {
        return response()->json(['message' => 'Email atau password salah'], 401);
    }

    if ($user->role !== 'admin') {
        return response()->json(['message' => 'Unauthorized - not admin'], 403);
    }

    $token = $user->createToken('admin-token')->plainTextToken;

    return response()->json([
        'message' => 'Login berhasil',
        'token' => $token,
        'user' => $user
    ]);
});

// Route yang dilindungi middleware (hanya admin yang bisa akses)
Route::middleware(['auth:sanctum', 'is_admin'])->group(function () {
    Route::get('/admin/dashboard', function () {
        return response()->json(['message' => 'Welcome Admin']);
    });

    // Tambahkan route admin lainnya di sini
});

// Route untuk logout admin

Route::middleware('auth:sanctum')->post('/admin/logout', [AuthenticatedSessionController::class, 'apiLogout']);

// API routes for PageController
Route::middleware(['auth:sanctum', 'is_admin'])->prefix('admin')->group(function () {
    Route::apiResource('pages', PageController::class);
});

// API routes for FeatureController
Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/features', [FeatureController::class, 'store']);
    Route::get('/features', [FeatureController::class, 'index']);
    Route::get('/features/{id}', [FeatureController::class, 'show']);
    Route::put('/features/{id}', [FeatureController::class, 'update']);
    Route::delete('/features/{id}', [FeatureController::class, 'destroy']);
});

// API routes for PartnerController
Route::middleware(['auth:sanctum', 'is_admin'])->prefix('admin')->group(function () {
    Route::get('/partners', [PartnerController::class, 'index']);
    Route::post('/partners', [PartnerController::class, 'store']);
    Route::get('/partners/{id}', [PartnerController::class, 'show']);
    Route::put('/partners/{id}', [PartnerController::class, 'update']);
    Route::delete('/partners/{id}', [PartnerController::class, 'destroy']);
});

// API routes for TestimonialController
Route::middleware(['auth:sanctum', 'is_admin'])->prefix('admin')->group(function () {
    Route::get('/testimonials', [TestimonialController::class, 'index']);
    Route::post('/testimonials', [TestimonialController::class, 'store']);
    Route::get('/testimonials/{id}', [TestimonialController::class, 'show']);
    Route::put('/testimonials/{id}', [TestimonialController::class, 'update']);
    Route::delete('/testimonials/{id}', [TestimonialController::class, 'destroy']);
});

// API routes for FaqController
Route::middleware(['auth:sanctum', 'is_admin'])->prefix('admin')->group(function () {
    Route::get('/faqs', [FaqController::class, 'index']);
    Route::post('/faqs', [FaqController::class, 'store']);
    Route::get('/faqs/{id}', [FaqController::class, 'show']);
    Route::put('/faqs/{id}', [FaqController::class, 'update']);
    Route::delete('/faqs/{id}', [FaqController::class, 'destroy']);
});

// API routes for FooterController
Route::middleware(['auth:sanctum', 'is_admin'])->prefix('admin')->group(function () {
    Route::get('/footers', [FooterController::class, 'index']);
    Route::post('/footers', [FooterController::class, 'store']);
    Route::get('/footers/{id}', [FooterController::class, 'show']);
    Route::put('/footers/{id}', [FooterController::class, 'update']);
    Route::delete('/footers/{id}', [FooterController::class, 'destroy']);
});