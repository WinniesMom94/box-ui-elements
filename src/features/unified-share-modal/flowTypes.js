// @flow
import type { itemType } from '../../common/box-types';
import * as constants from './constants';

// DRY: Invert the constants so that we can construct the appropriate enum types
const accessLevelValues = {
    [constants.ANYONE_WITH_LINK]: 'ANYONE_WITH_LINK',
    [constants.ANYONE_IN_COMPANY]: 'ANYONE_IN_COMPANY',
    [constants.PEOPLE_IN_ITEM]: 'PEOPLE_IN_ITEM',
};
export type accessLevelType = $Keys<typeof accessLevelValues>;

const permissionLevelValues = {
    [constants.CAN_VIEW_DOWNLOAD]: 'CAN_VIEW_DOWNLOAD',
    [constants.CAN_VIEW_ONLY]: 'CAN_VIEW_ONLY',
};
export type permissionLevelType = $Keys<typeof permissionLevelValues>;

const collaboratorGroupValues = {
    [constants.COLLAB_GROUP_TYPE]: 'COLLAB_GROUP_TYPE',
    [constants.COLLAB_USER_TYPE]: 'COLLAB_USER_TYPE',
    [constants.COLLAB_PENDING_TYPE]: 'COLLAB_PENDING_TYPE',
};
export type collaboratorGroupType = $Keys<typeof collaboratorGroupValues>;

export type allowedAccessLevelsType = {
    peopleWithTheLink?: boolean,
    peopleInYourCompany?: boolean,
    peopleInThisItem?: boolean,
};

export type contactType = {
    email?: string,
    id: number | string,
    name?: string,
    text?: string,
    type: string,
    value?: number | string,
};

export type inviteePermissionType = {
    disabled?: boolean,
    text: string,
    value: string,
};

export type item = {
    grantedPermissions: {
        itemShare: boolean,
    },
    hideCollaborators: boolean,
    id: number,
    name: string,
    type: itemType,
    typedID: string,
};

export type emailFormTrackingType = {
    onContactAdd?: Function,
    onContactRemove?: Function,
    onSendClick?: Function,
    cancelButtonProps?: Object,
    messageProps?: Object,
};

export type sharedLinkTrackingType = {
    copyButtonProps?: Object,
    onChangeSharedLinkAccessLevel?: Function,
    onChangeSharedLinkPermissionLevel?: Function,
    onSharedLinkCopy?: Function,
    onToggleLink?: Function,
    sendSharedLinkButtonProps?: Object,
    sharedLinkAccessMenuButtonProps?: Object,
    sharedLinkPermissionsMenuButtonProps?: Object,
    sharedLinkSettingsButtonProps?: Object,
};

export type collaboratorListTrackingType = {
    doneButtonProps?: Object,
    manageLinkProps?: Object,
    usernameProps?: Object,
    emailProps?: Object,
    viewAdditionalProps?: Object,
};

export type trackingPropsType = {
    inviteCollabsEmailTracking: {
        ...emailFormTrackingType,
        upgradeLinkProps?: Object,
    },
    sharedLinkEmailTracking: emailFormTrackingType,
    sharedLinkTracking: sharedLinkTrackingType,
    inviteCollabTracking: {
        onEnterInviteCollabs?: Function,
        onInviteePermissionChange?: Function,
        inviteePermissionsButtonProps?: Object,
    },
    modalTracking: {
        onLoad?: Function,
        modalProps?: Object,
        betaLabelProps?: Object,
        collaboratorAvatarsProps?: Object,
        ftuxConfirmButtonProps?: Object,
    },
    removeLinkConfirmModalTracking: {
        modalProps?: Object,
        cancelButtonProps?: Object,
        okayButtonProps?: Object,
        onLoad?: Function,
    },
    collaboratorListTracking: collaboratorListTrackingType,
};

// this type is a strict subset of the SharedLinkRecord data returned from the server
export type sharedLinkType = {
    accessLevel: accessLevelType,
    allowedAccessLevels: allowedAccessLevelsType,
    canChangeAccessLevel: boolean,
    enterpriseName: string,
    expirationTimestamp: ?number,
    isDownloadSettingAvailable: boolean,
    isNewSharedLink: boolean,
    permissionLevel: permissionLevelType,
    url: string,
};

export type collaboratorType = {
    collabID: number,
    hasCustomAvatar: boolean,
    imageURL: ?string,
    name: string,
    type: collaboratorGroupType,
    userID: ?number,
};

export type collaboratorsListType = {
    collaborators: Array<collaboratorType>,
};
