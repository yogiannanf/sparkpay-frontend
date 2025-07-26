@extends('layouts.app')

@section('content')
<div class="max-w-4xl mx-auto p-8 bg-white shadow rounded">
    <h1 class="text-2xl font-bold mb-4">Admin Dashboard</h1>
    <p>Selamat datang, {{ Auth::user()->name }} ({{ Auth::user()->email }})</p>
</div>
@endsection
