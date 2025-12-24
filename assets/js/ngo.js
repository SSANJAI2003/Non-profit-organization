function toggleCampaigns() {
    const extraCampaigns = document.getElementById('extra-campaigns');
    const btn = document.getElementById('view-all-btn');

    if (extraCampaigns.classList.contains('d-none')) {
        extraCampaigns.classList.remove('d-none');
        btn.textContent = 'Show Less';
    } else {
        extraCampaigns.classList.add('d-none');
        btn.textContent = 'View All Campaigns';
    }
}
