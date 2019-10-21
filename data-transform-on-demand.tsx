declare const state: AppState

export function CampaignsRow({week}) {
    const campaigns = getCampaigns(state)
    return (
        <div>
            <h2>Campaigns for {week}</h2>
            {campaigns.map(campaign => <CampaignCard campaign={campaign} />)}
        </div>
    )
}

/**
 * Gets a list of campaigns from the store, does some transform
 */
export function getCampaigns(state: AppState) {
    return state.campaigns.map(campaign => ({
        ...campaign,
        calendarWeek: new CalendarWeek(campaign.calendarWeek)
    }))
}

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
}
