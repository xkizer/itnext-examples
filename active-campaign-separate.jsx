import clsx from 'clsx';
import React from 'react';

/**
 * 
 */
export function CampaignsRow({week}) {
    const campaigns = getCampaigns(state)
    const activeCampaignId = getActiveCampaignId(state)
    return (
        <div>
            <h2>Campaigns for {week}</h2>
            {campaigns.map(campaign => (
                <CampaignCard
                    campaign={campaign}
                    activeCampaignId={activeCampaignId} // <--
                    key={campaign.campaignId}
                />
            ))}
        </div>
    )
}

/**
 * 
 */
export function CampaignCard ({activeCampaignId, campaign}) {
    const {campaignId} = campaign
    const className = clsx(activeCampaignId === campaignId && 'active', 'campaign-card');
    
    return (
        <div className={className} onClick={() => setActiveCampaignId(store, activeCampaignId)}>
            {campaign.name}
        </div>
    );
}

let store = {
    campaigns: [
        { campaignId: 'campaign-1', name: 'Addidas Specials' },
        { campaignId: 'campaign-2', name: 'Summer Heat' },
        { campaignId: 'campaign-3', name: 'Footwork' },
        { campaignId: 'campaign-4', name: 'Z Essentials' },
    ],
    activeCampaignId: 'campaign-2'
}

function setActiveCampaignId(state, campaignId) {
    store = {
        ...state,
        activeCampaignId: campaignId
    }
}
