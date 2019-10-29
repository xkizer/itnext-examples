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
    
    return (
        <section>
            <h2>{name}</h2>
            <div>Planned for: {formatCalendarWeek(calendarWeek, 'Y [Week] W')}</div>
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
    calendarWeek: string
}

declare function formatCalendarWeek(calendarWeek: string, pattern: string): string
