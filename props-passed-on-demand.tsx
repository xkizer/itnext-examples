export function CampaignsList() {
    const weeks = getCampaignWeeks()
    return (
        <div>
            <h1>Campaigns List</h1>
            {weeks.map(week => <CampaignsRow week={week} />)}
        </div>
    )
}

export function CampaignsRow({week}) {
    const campaignIds = getCampaignIdsByWeek(week)
    return (
        <div>
            <h2>Campaigns for {week}</h2>
            {campaignIds.map(campaignId => <CampaignCard campaignId={campaignId} />)}
        </div>
    )
}

export function CampaignCard({campaignId}) {
    const {name, brands} = getCampaignById(campaignId);
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

/**
 *  Returns the list of weeks without campaigns
 */
declare function getCampaignWeeks(): string[]

/**
 * Returns a list of all campaign IDs in this week
 * @param week 
 */
declare function getCampaignIdsByWeek(week: string): string[]

/**
 * Get a campaign by the ID
 * @param campaignId 
 */
declare function getCampaignById(campaignId: string): Campaign

type Campaign = {
    campaignId: string
    name: string
    calendarWeek: string
    brands: string[]
};
