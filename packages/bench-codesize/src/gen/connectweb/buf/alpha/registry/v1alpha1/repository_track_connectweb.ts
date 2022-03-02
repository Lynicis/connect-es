/* eslint-disable */
// @generated by protoc-gen-connect-web v0.0.1 with parameter "ts_nocheck=false"
// @generated from file buf/alpha/registry/v1alpha1/repository_track.proto (package buf.alpha.registry.v1alpha1, syntax proto3)
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

import {CreateRepositoryTrackRequest, CreateRepositoryTrackResponse, DeleteRepositoryTrackByNameRequest, DeleteRepositoryTrackByNameResponse, GetRepositoryTrackByNameRequest, GetRepositoryTrackByNameResponse, ListRepositoryTracksRequest, ListRepositoryTracksResponse} from "./repository_track_pb.js";
import {MethodKind} from "@bufbuild/protobuf";

/**
 * @generated from service buf.alpha.registry.v1alpha1.RepositoryTrackService
 */
export const RepositoryTrackService = {
    typeName: "buf.alpha.registry.v1alpha1.RepositoryTrackService",
    methods: {
        /**
         * CreateRepositoryTrack creates a new repository track.
         *
         * @generated from rpc buf.alpha.registry.v1alpha1.RepositoryTrackService.CreateRepositoryTrack
         */
        createRepositoryTrack: {
            name: "CreateRepositoryTrack",
            I: CreateRepositoryTrackRequest,
            O: CreateRepositoryTrackResponse,
            kind: MethodKind.Unary,
        },
        /**
         * ListRepositoryTracks lists the repository tracks associated with a repository.
         *
         * @generated from rpc buf.alpha.registry.v1alpha1.RepositoryTrackService.ListRepositoryTracks
         */
        listRepositoryTracks: {
            name: "ListRepositoryTracks",
            I: ListRepositoryTracksRequest,
            O: ListRepositoryTracksResponse,
            kind: MethodKind.Unary,
        },
        /**
         * DeleteRepositoryTrackByName deletes a repository track by name.
         *
         * @generated from rpc buf.alpha.registry.v1alpha1.RepositoryTrackService.DeleteRepositoryTrackByName
         */
        deleteRepositoryTrackByName: {
            name: "DeleteRepositoryTrackByName",
            I: DeleteRepositoryTrackByNameRequest,
            O: DeleteRepositoryTrackByNameResponse,
            kind: MethodKind.Unary,
        },
        /**
         * GetRepositoryTrackByName gets a repository track by name.
         *
         * @generated from rpc buf.alpha.registry.v1alpha1.RepositoryTrackService.GetRepositoryTrackByName
         */
        getRepositoryTrackByName: {
            name: "GetRepositoryTrackByName",
            I: GetRepositoryTrackByNameRequest,
            O: GetRepositoryTrackByNameResponse,
            kind: MethodKind.Unary,
        },
    }
} as const;

