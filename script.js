document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const preview = document.getElementById('preview');
    const previewContainer = document.querySelector('.preview-container');
    const searchInput = document.querySelector('.search-input');

    // Handle file upload and preview
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function() {
                    preview.src = reader.result;
                    previewContainer.classList.add('show');
                    
                    // Auto-hide preview after 5 seconds
                    setTimeout(() => {
                        previewContainer.classList.remove('show');
                        fileInput.value = ''; // Reset input
                    }, 5000);
                };
                reader.readAsDataURL(file);
            } else {
                alert('Please select a valid image file (JPEG, PNG, GIF)');
                fileInput.value = ''; // Reset input
            }
        }
    });

    // Trigger file input when upload button is clicked
    document.querySelector('.upload-btn').addEventListener('click', () => {
        fileInput.click();
    });

    // Search bar animation
    searchInput.addEventListener('focus', () => {
        searchInput.parentElement.classList.add('ring-2', 'ring-blue-500');
    });

    searchInput.addEventListener('blur', () => {
        searchInput.parentElement.classList.remove('ring-2', 'ring-blue-500');
    });

    // Add subtle animation to search button
    const searchBtn = document.querySelector('.search-btn');
    searchBtn.addEventListener('mouseenter', () => {
        searchBtn.classList.add('animate-bounce');
    });

    searchBtn.addEventListener('mouseleave', () => {
        searchBtn.classList.remove('animate-bounce');
    });
});