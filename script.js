/* script.js */

document.addEventListener('DOMContentLoaded', function() {
    // FAQアコーディオン機能
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // 他の開いている項目を閉じる場合は、このループを有効にする
            // faqItems.forEach(otherItem => {
            //     if (otherItem !== item) {
            //         otherItem.classList.remove('active');
            //     }
            // });

            // クリックされた項目を開閉する
            item.classList.toggle('active');
        });
    });
});
