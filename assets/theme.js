document.addEventListener('DOMContentLoaded', () => {
  // Simple wishlist functionality using localStorage
  window.ZacmoTheme = {
    wishlist: JSON.parse(localStorage.getItem('zacmo_wishlist')) || [],
    
    toggleWishlist: function(productId) {
      const index = this.wishlist.indexOf(productId);
      if (index > -1) {
        this.wishlist.splice(index, 1);
      } else {
        this.wishlist.push(productId);
      }
      localStorage.setItem('zacmo_wishlist', JSON.stringify(this.wishlist));
      this.updateWishlistUI();
    },

    updateWishlistUI: function() {
      document.querySelectorAll('[data-wishlist-btn]').forEach(btn => {
        const id = btn.getAttribute('data-product-id');
        if (this.wishlist.includes(id)) {
          btn.classList.add('active');
          btn.querySelector('svg').setAttribute('fill', 'var(--color-primary)');
        } else {
          btn.classList.remove('active');
          btn.querySelector('svg').setAttribute('fill', 'none');
        }
      });
      
      const countEl = document.querySelector('.wishlist-count');
      if (countEl) {
        countEl.textContent = this.wishlist.length;
        countEl.style.display = this.wishlist.length > 0 ? 'flex' : 'none';
      }
    }
  };

  window.ZacmoTheme.updateWishlistUI();
});
