document.addEventListener('DOMContentLoaded', function() {
    const comparisons = document.querySelectorAll('.comparison-item');
    
    // Add hover effects to comparison items
    comparisons.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add click handler for CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            window.open('https://calendly.com/matthew-norivane/mb-30-minutes', '_blank');
        });
    }
});
