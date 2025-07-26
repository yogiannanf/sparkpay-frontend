<?php include 'partials/header.php'; ?>
<?php include 'partials/sidebar.php'; ?>

<main class="container mt-4">
    <h2>Pages</h2>
    <a href="#" class="btn btn-success mb-3">Tambah Page</a>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>ID</th>
                <th>Judul</th>
                <th>Slug</th>
                <th>Aksi</th>
            </tr>
        </thead>
        <tbody id="page-list">
            <!-- Data diisi dengan JavaScript dari API -->
        </tbody>
    </table>
</main>

<script>
fetch('http://localhost:8000/api/admin/pages', {
    headers: { 'Authorization': 'Bearer YOUR_TOKEN_HERE' }
})
.then(res => res.json())
.then(data => {
    const list = document.getElementById('page-list');
    data.forEach(page => {
        list.innerHTML += `
            <tr>
                <td>${page.id}</td>
                <td>${page.title}</td>
                <td>${page.slug}</td>
                <td>
                    <button class="btn btn-sm btn-warning">Edit</button>
                    <button class="btn btn-sm btn-danger">Hapus</button>
                </td>
            </tr>`;
    });
});
</script>

<?php include 'partials/footer.php'; ?>
