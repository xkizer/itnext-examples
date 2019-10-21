export function CampaignsList({campaignWeeks}: CampaignsListProps) {
    return (
        <div>
            <h1>Campaigns List</h1>
            {Object.entries(campaignWeeks).map(([week, campaigns]) => <CampaignsRow campaigns={campaigns} week={week} />)}
        </div>
    );
}

export function CampaignsRow({week, campaigns}) {
    return (
        <div>
            <h2>Campaigns for {week}</h2>
            {campaigns.map(campaign => <CampaignCard campaign={campaign} />)}
        </div>
    );
}

export function CampaignCard({campaign}) {
    const {campaignId, name, brands} = campaign;
    return (
        <div id={`campaign-${campaignId}`}>
            <h3>{name}</h3>
            <h4>Brands:</h4>
            <ul>
                {brands.map(brand => <li>{brand}</li>)}
            </ul>
        </div>
    );
}

type CampaignsListProps = {
    campaigns: {
        [k: string]: Campaign[];
    };
};

type Campaign = {
    campaignId: string;
    name: string;
    calendarWeek: string;
    brands: string[];
};
