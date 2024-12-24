document.addEventListener('DOMContentLoaded', () => {
    const companyList = document.getElementById('companyList');

    // Mock data for demonstration
    const companies = [
        { name: "100ms", logo: "https://via.placeholder.com/100x50", risk: "Low" },
        { name: "1047 Games", logo: "https://via.placeholder.com/100x50", risk: "Medium" },
        { name: "10x Genomics", logo: "https://via.placeholder.com/100x50", risk: "High" },
        { name: "1910 Genetics", logo: "https://via.placeholder.com/100x50", risk: "Low" },
    ];

    // Function to display companies
    const displayCompanies = (filter = "") => {
        companyList.innerHTML = "";
        const filteredCompanies = companies.filter(company => company.name.toLowerCase().includes(filter.toLowerCase()));
        
        filteredCompanies.forEach(company => {
            const card = document.createElement('div');
            card.className = 'col-6 col-md-4 col-lg-3';
            card.innerHTML = `
                <div class="card text-center border-0 shadow-sm">
                    <img src="${company.logo}" class="card-img-top mx-auto" alt="${company.name}">
                    <div class="card-body">
                        <h6 class="card-title mb-1">${company.name}</h6>
                        <p class="badge ${company.risk === 'High' ? 'bg-danger' : company.risk === 'Medium' ? 'bg-warning' : 'bg-success'}">${company.risk} Risk</p>
                    </div>
                </div>
            `;
            companyList.appendChild(card);
        });
    };

    // Initialize display
    displayCompanies();

    // Search functionality
    document.getElementById('searchCompany').addEventListener('input', (e) => {
        displayCompanies(e.target.value);
    });

    // Recommended assessment
    document.getElementById('recommendBtn').addEventListener('click', () => {
        alert("Fetching recommended risk scores...");
    });
});
