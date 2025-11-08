// translations.js — enkel inbyggd översättnings-lookup
// Används för att visa statisk text i UI (sv/en)
const translations = {
    sv: {
        uploadStep: {
            title: 'Ladda upp synstyrka',
            uploadPrompt: 'Klicka för att ladda upp fil',
            fileTypes: 'PDF, JPG eller PNG',
        },
        summaryStep: {
            title: 'Granska din order',
            glassType: 'Glastyp:',
            tint: 'Toning:',
            frame: 'Båge:',
            prescription: 'Synstyrka:',
            base: 'Baspris:',
            tax: 'Moms:',
            shipping: 'Frakt:',
            total: 'Totalt:',
            testNotice:
                '⚠️ Test-läge: Fil laddas upp direkt. I produktion sker uppladdning endast efter godkänd betalning.',
            btnProcessing: 'Bearbetar...',
            btnPay: 'Gå till betalning',
            error: 'Något gick fel. Försök igen.',
            noSelection: '-',
            fileIcon: '📄'
        },
        priceBar: {
            title: 'Dina val',
            buttonText: 'Dina glas',
            currency: 'SEK',
            toggleOpen: '▼',
            toggleClose: '▲'
        },
        steps: [
            { title: 'Välj glastyp' },
            { title: 'Välj toning' },
            { title: 'Vilken typ av båge?' },
            { title: 'Ladda upp synstyrka' },
            { title: 'Granska din order' },
        ],
    },
    en: {
        uploadStep: {
            title: 'Upload prescription',
            uploadPrompt: 'Click to upload file',
            fileTypes: 'PDF, JPG, or PNG',
        },
        summaryStep: {
            title: 'Review your order',
            glassType: 'Glass type:',
            tint: 'Tint:',
            frame: 'Frame:',
            prescription: 'Prescription:',
            base: 'Base price:',
            tax: 'Tax:',
            shipping: 'Shipping:',
            total: 'Total:',
            testNotice:
                '⚠️ Test mode: File uploads instantly. In production, upload happens only after payment.',
            btnProcessing: 'Processing...',
            btnPay: 'Proceed to payment',
            error: 'Something went wrong. Try again.',
            noSelection: '-',
            fileIcon: '📄'
        },
        priceBar: {
            title: 'Your selections',
            buttonText: 'Your glasses',
            currency: 'SEK',
            toggleOpen: '▼',
            toggleClose: '▲'
        },
        steps: [
            { title: 'Choose glass type' },
            { title: 'Choose tint' },
            { title: 'What type of frame?' },
            { title: 'Upload prescription' },
            { title: 'Review your order' },
        ],
    },
};

export const getTranslations = (lang) => {
    return lang === 'sv' ? translations.sv : translations.en;
};