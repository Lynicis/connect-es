/* eslint-disable */
// @generated by protoc-gen-connect-web v0.0.1 with parameter "ts_nocheck=false"
// @generated from file buf/alpha/registry/v1alpha1/authz.proto (package buf.alpha.registry.v1alpha1, syntax proto3)
//
// Copyright 2020-2022 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {UserCanAddOrganizationMemberRequest, UserCanAddOrganizationMemberResponse, UserCanCreateOrganizationPluginRequest, UserCanCreateOrganizationPluginResponse, UserCanCreateOrganizationRepositoryRequest, UserCanCreateOrganizationRepositoryResponse, UserCanCreateOrganizationTemplateRequest, UserCanCreateOrganizationTemplateResponse, UserCanCreatePluginVersionRequest, UserCanCreatePluginVersionResponse, UserCanCreateTemplateVersionRequest, UserCanCreateTemplateVersionResponse, UserCanDeleteOrganizationRequest, UserCanDeleteOrganizationResponse, UserCanDeletePluginRequest, UserCanDeletePluginResponse, UserCanDeleteRepositoryRequest, UserCanDeleteRepositoryResponse, UserCanDeleteTemplateRequest, UserCanDeleteTemplateResponse, UserCanDeleteUserRequest, UserCanDeleteUserResponse, UserCanManagePluginContributorsRequest, UserCanManagePluginContributorsResponse, UserCanManageRepositoryContributorsRequest, UserCanManageRepositoryContributorsResponse, UserCanManageTemplateContributorsRequest, UserCanManageTemplateContributorsResponse, UserCanReadPluginRequest, UserCanReadPluginResponse, UserCanRemoveOrganizationMemberRequest, UserCanRemoveOrganizationMemberResponse, UserCanSeeOrganizationSettingsRequest, UserCanSeeOrganizationSettingsResponse, UserCanSeePluginSettingsRequest, UserCanSeePluginSettingsResponse, UserCanSeeRepositorySettingsRequest, UserCanSeeRepositorySettingsResponse, UserCanSeeServerAdminPanelRequest, UserCanSeeServerAdminPanelResponse, UserCanSeeTemplateSettingsRequest, UserCanSeeTemplateSettingsResponse, UserCanUpdateOrganizationMemberRequest, UserCanUpdateOrganizationMemberResponse} from "./authz_pb.js";
import {MethodKind} from "@bufbuild/protobuf";

/**
 * AuthzService supplies authorization helpers.
 *
 * @generated from service buf.alpha.registry.v1alpha1.AuthzService
 */
export const AuthzService = {
    typeName: "buf.alpha.registry.v1alpha1.AuthzService",
    methods: {
        /**
         * UserCanCreateOrganizationRepository returns whether the user is authorized
         * to create repositories in an organization.
         *
         * @generated from rpc buf.alpha.registry.v1alpha1.AuthzService.UserCanCreateOrganizationRepository
         */
        userCanCreateOrganizationRepository: {
            name: "UserCanCreateOrganizationRepository",
            I: UserCanCreateOrganizationRepositoryRequest,
            O: UserCanCreateOrganizationRepositoryResponse,
            kind: MethodKind.Unary,
        },
        /**
         * UserCanSeeRepositorySettings returns whether the user is authorized
         * to see repository settings.
         *
         * @generated from rpc buf.alpha.registry.v1alpha1.AuthzService.UserCanSeeRepositorySettings
         */
        userCanSeeRepositorySettings: {
            name: "UserCanSeeRepositorySettings",
            I: UserCanSeeRepositorySettingsRequest,
            O: UserCanSeeRepositorySettingsResponse,
            kind: MethodKind.Unary,
        },
        /**
         * UserCanSeeOrganizationSettings returns whether the user is authorized
         * to see organization settings.
         *
         * @generated from rpc buf.alpha.registry.v1alpha1.AuthzService.UserCanSeeOrganizationSettings
         */
        userCanSeeOrganizationSettings: {
            name: "UserCanSeeOrganizationSettings",
            I: UserCanSeeOrganizationSettingsRequest,
            O: UserCanSeeOrganizationSettingsResponse,
            kind: MethodKind.Unary,
        },
        /**
         * UserCanReadPlugin returns whether the user has read access to the specified plugin.
         *
         * @generated from rpc buf.alpha.registry.v1alpha1.AuthzService.UserCanReadPlugin
         */
        userCanReadPlugin: {
            name: "UserCanReadPlugin",
            I: UserCanReadPluginRequest,
            O: UserCanReadPluginResponse,
            kind: MethodKind.Unary,
        },
        /**
         * UserCanCreatePluginVersion returns whether the user is authorized
         * to create a plugin version under the specified plugin.
         *
         * @generated from rpc buf.alpha.registry.v1alpha1.AuthzService.UserCanCreatePluginVersion
         */
        userCanCreatePluginVersion: {
            name: "UserCanCreatePluginVersion",
            I: UserCanCreatePluginVersionRequest,
            O: UserCanCreatePluginVersionResponse,
            kind: MethodKind.Unary,
        },
        /**
         * UserCanCreateTemplateVersion returns whether the user is authorized
         * to create a template version under the specified template.
         *
         * @generated from rpc buf.alpha.registry.v1alpha1.AuthzService.UserCanCreateTemplateVersion
         */
        userCanCreateTemplateVersion: {
            name: "UserCanCreateTemplateVersion",
            I: UserCanCreateTemplateVersionRequest,
            O: UserCanCreateTemplateVersionResponse,
            kind: MethodKind.Unary,
        },
        /**
         * UserCanCreateOrganizationPlugin returns whether the user is authorized to create
         * a plugin in an organization.
         *
         * @generated from rpc buf.alpha.registry.v1alpha1.AuthzService.UserCanCreateOrganizationPlugin
         */
        userCanCreateOrganizationPlugin: {
            name: "UserCanCreateOrganizationPlugin",
            I: UserCanCreateOrganizationPluginRequest,
            O: UserCanCreateOrganizationPluginResponse,
            kind: MethodKind.Unary,
        },
        /**
         * UserCanCreateOrganizationPlugin returns whether the user is authorized to create
         * a template in an organization.
         *
         * @generated from rpc buf.alpha.registry.v1alpha1.AuthzService.UserCanCreateOrganizationTemplate
         */
        userCanCreateOrganizationTemplate: {
            name: "UserCanCreateOrganizationTemplate",
            I: UserCanCreateOrganizationTemplateRequest,
            O: UserCanCreateOrganizationTemplateResponse,
            kind: MethodKind.Unary,
        },
        /**
         * UserCanSeePluginSettings returns whether the user is authorized
         * to see plugin settings.
         *
         * @generated from rpc buf.alpha.registry.v1alpha1.AuthzService.UserCanSeePluginSettings
         */
        userCanSeePluginSettings: {
            name: "UserCanSeePluginSettings",
            I: UserCanSeePluginSettingsRequest,
            O: UserCanSeePluginSettingsResponse,
            kind: MethodKind.Unary,
        },
        /**
         * UserCanSeeTemplateSettings returns whether the user is authorized
         * to see template settings.
         *
         * @generated from rpc buf.alpha.registry.v1alpha1.AuthzService.UserCanSeeTemplateSettings
         */
        userCanSeeTemplateSettings: {
            name: "UserCanSeeTemplateSettings",
            I: UserCanSeeTemplateSettingsRequest,
            O: UserCanSeeTemplateSettingsResponse,
            kind: MethodKind.Unary,
        },
        /**
         * UserCanAddOrganizationMember returns whether the user is authorized to add
         * any members to the organization and the list of roles they can add.
         *
         * @generated from rpc buf.alpha.registry.v1alpha1.AuthzService.UserCanAddOrganizationMember
         */
        userCanAddOrganizationMember: {
            name: "UserCanAddOrganizationMember",
            I: UserCanAddOrganizationMemberRequest,
            O: UserCanAddOrganizationMemberResponse,
            kind: MethodKind.Unary,
        },
        /**
         * UserCanUpdateOrganizationMember returns whether the user is authorized to update
         * any members' membership information in the organization and the list of roles they can update.
         *
         * @generated from rpc buf.alpha.registry.v1alpha1.AuthzService.UserCanUpdateOrganizationMember
         */
        userCanUpdateOrganizationMember: {
            name: "UserCanUpdateOrganizationMember",
            I: UserCanUpdateOrganizationMemberRequest,
            O: UserCanUpdateOrganizationMemberResponse,
            kind: MethodKind.Unary,
        },
        /**
         * UserCanRemoveOrganizationMember returns whether the user is authorized to remove
         * any members from the organization and the list of roles they can remove.
         *
         * @generated from rpc buf.alpha.registry.v1alpha1.AuthzService.UserCanRemoveOrganizationMember
         */
        userCanRemoveOrganizationMember: {
            name: "UserCanRemoveOrganizationMember",
            I: UserCanRemoveOrganizationMemberRequest,
            O: UserCanRemoveOrganizationMemberResponse,
            kind: MethodKind.Unary,
        },
        /**
         * UserCanDeleteOrganization returns whether the user is authorized
         * to delete an organization.
         *
         * @generated from rpc buf.alpha.registry.v1alpha1.AuthzService.UserCanDeleteOrganization
         */
        userCanDeleteOrganization: {
            name: "UserCanDeleteOrganization",
            I: UserCanDeleteOrganizationRequest,
            O: UserCanDeleteOrganizationResponse,
            kind: MethodKind.Unary,
        },
        /**
         * UserCanDeleteRepository returns whether the user is authorized
         * to delete a repository.
         *
         * @generated from rpc buf.alpha.registry.v1alpha1.AuthzService.UserCanDeleteRepository
         */
        userCanDeleteRepository: {
            name: "UserCanDeleteRepository",
            I: UserCanDeleteRepositoryRequest,
            O: UserCanDeleteRepositoryResponse,
            kind: MethodKind.Unary,
        },
        /**
         * UserCanDeleteTemplate returns whether the user is authorized
         * to delete a template.
         *
         * @generated from rpc buf.alpha.registry.v1alpha1.AuthzService.UserCanDeleteTemplate
         */
        userCanDeleteTemplate: {
            name: "UserCanDeleteTemplate",
            I: UserCanDeleteTemplateRequest,
            O: UserCanDeleteTemplateResponse,
            kind: MethodKind.Unary,
        },
        /**
         * UserCanDeletePlugin returns whether the user is authorized
         * to delete a plugin.
         *
         * @generated from rpc buf.alpha.registry.v1alpha1.AuthzService.UserCanDeletePlugin
         */
        userCanDeletePlugin: {
            name: "UserCanDeletePlugin",
            I: UserCanDeletePluginRequest,
            O: UserCanDeletePluginResponse,
            kind: MethodKind.Unary,
        },
        /**
         * UserCanDeleteUser returns whether the user is authorized
         * to delete a user.
         *
         * @generated from rpc buf.alpha.registry.v1alpha1.AuthzService.UserCanDeleteUser
         */
        userCanDeleteUser: {
            name: "UserCanDeleteUser",
            I: UserCanDeleteUserRequest,
            O: UserCanDeleteUserResponse,
            kind: MethodKind.Unary,
        },
        /**
         * UserCanSeeServerAdminPanel returns whether the user is authorized
         * to see server admin panel.
         *
         * @generated from rpc buf.alpha.registry.v1alpha1.AuthzService.UserCanSeeServerAdminPanel
         */
        userCanSeeServerAdminPanel: {
            name: "UserCanSeeServerAdminPanel",
            I: UserCanSeeServerAdminPanelRequest,
            O: UserCanSeeServerAdminPanelResponse,
            kind: MethodKind.Unary,
        },
        /**
         * UserCanManageRepositoryContributors returns whether the user is authorized to manage
         * any contributors to the repository and the list of roles they can manage.
         *
         * @generated from rpc buf.alpha.registry.v1alpha1.AuthzService.UserCanManageRepositoryContributors
         */
        userCanManageRepositoryContributors: {
            name: "UserCanManageRepositoryContributors",
            I: UserCanManageRepositoryContributorsRequest,
            O: UserCanManageRepositoryContributorsResponse,
            kind: MethodKind.Unary,
        },
        /**
         * UserCanManagePluginContributors returns whether the user is authorized to manage
         * any contributors to the plugin and the list of roles they can manage.
         *
         * @generated from rpc buf.alpha.registry.v1alpha1.AuthzService.UserCanManagePluginContributors
         */
        userCanManagePluginContributors: {
            name: "UserCanManagePluginContributors",
            I: UserCanManagePluginContributorsRequest,
            O: UserCanManagePluginContributorsResponse,
            kind: MethodKind.Unary,
        },
        /**
         * UserCanManageTemplateContributors returns whether the user is authorized to manage
         * any contributors to the template and the list of roles they can manage.
         *
         * @generated from rpc buf.alpha.registry.v1alpha1.AuthzService.UserCanManageTemplateContributors
         */
        userCanManageTemplateContributors: {
            name: "UserCanManageTemplateContributors",
            I: UserCanManageTemplateContributorsRequest,
            O: UserCanManageTemplateContributorsResponse,
            kind: MethodKind.Unary,
        },
    }
} as const;

