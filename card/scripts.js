const inputNumber = document.getElementById('input-number');
const inputHolder = document.getElementById('input-holder');
const inputMonth = document.getElementById('input-month');
const inputYear = document.getElementById('input-year');
const cardNumber = document.getElementById('card-number');
const cardHolder = document.getElementById('card-holder');
const cardExpiration = document.getElementById('card-expiration');

// Update card number in real-time
inputNumber.addEventListener('input', () => {
    // Faqat raqamlarni qoldirish va uzunligini 16 ta raqam bilan cheklash
    const rawValue = inputNumber.value.replace(/\D/g, '').slice(0, 16);
  
    // Har to'rtta raqamdan keyin bo'sh joy qo'shish
    const formattedValue = rawValue.replace(/(\d{4})(?=\d)/g, '$1 ');
  
    // Karta raqamini yashirish: birinchi 4 va oxirgi 4 raqam ko'rinadi
    const hiddenValue = formattedValue
      .replace(/(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})/, (_, p1, p2, p3, p4) => {
        return `${p1} #### #### ${p4}`;
      });
  
    // Input maydon va kartaning matnini yangilash
    inputNumber.value = formattedValue; // Foydalanuvchi to'liq raqamni kiritadi
    cardNumber.textContent = hiddenValue || '#### #### #### ####'; // Kartada yashirilgan format ko'rsatiladi
  });

// Update card holder name in real-time
inputHolder.addEventListener('input', () => {
    // Maksimal uzunlikni cheklash va matnni katta harflar qilish
    const formattedValue = inputHolder.value.slice(0, 20).toUpperCase();
    
    // Input maydonni yangilash
    inputHolder.value = formattedValue;
    
    // Karta egasi ismini yangilash
    cardHolder.textContent = formattedValue || 'FULL NAME';
  });

// Update expiration date in real-time
inputMonth.addEventListener('change', updateExpirationDate);
inputYear.addEventListener('change', updateExpirationDate);

function updateExpirationDate() {
  const month = inputMonth.value !== 'MM' ? inputMonth.value : 'MM';
  const year = inputYear.value !== 'YY' ? inputYear.value : 'YY';
  cardExpiration.textContent = `${month}/${year}`;
}
