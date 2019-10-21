import clsx from 'clsx';
import React from 'react';

export function CampaignCard ({isActive, campaignId, ...campaignInfo}) {
    const className = clsx(isActive && 'active', 'campaign-card');
    
    return (
        <div className={className}>
            {campaignInfo.name}
        </div>
    );
}

const store = {
    campaigns: [
        { campaignId: 'campaign-1', name: 'Addidas Specials', isActive: false },
        { campaignId: 'campaign-2', name: 'Summer Heat', isActive: true },
        { campaignId: 'campaign-3', name: 'Footwork' },
        { campaignId: 'campaign-4', name: 'Z Essentials' },
    ]
}
