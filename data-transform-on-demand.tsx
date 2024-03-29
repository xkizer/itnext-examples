declare const state: AppState

/**
 * 
 */
export function CampaignsRow({week}) {
    const campaigns = getCampaigns(state)
    return (
        <div>
            <h2>Campaigns for {week}</h2>
            {campaigns.map(campaign => <CampaignCard campaign={campaign} key={campaign.campaignId} />)}
        </div>
    )
}

/**
 * 
 */
export function CampaignCard({campaign}) {
    const {name, calendarWeek} = campaign
    const cwObj = new CalendarWeek(calendarWeek)
    
    return (
        <section>
            <h2>{name}</h2>
            <div>Planned for: {cwObj.format('Y [Week] W')}</div>
        </section>
    )
}

/**
 * Gets a list of campaigns from the store, does NO transform
 */
export function getCampaigns(state: AppState) {
    return { ...state.campaigns }
}

// ...

type AppState = {
    campaigns: Campaign[]
}

type Campaign = {
    campaignId: string
    name: string
    calendarWeek: string // This needs to be a CalendarWeek object to be usable
}

declare class CalendarWeek {
    constructor(calendarWeek: string)
    
    // Contains some very important methods and getters
    format(pattern: string): string
}
