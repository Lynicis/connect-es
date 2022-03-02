/* eslint-disable */
// @generated by protoc-gen-connect-web v0.0.1 with parameter "ts_nocheck=false"
// @generated from file google/protobuf/unittest.proto (package protobuf_unittest, syntax proto2)
//
// Protocol Buffers - Google's data interchange format
// Copyright 2008 Google Inc.  All rights reserved.
// https://developers.google.com/protocol-buffers/
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//     * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// Author: kenton@google.com (Kenton Varda)
//  Based on original Protocol Buffers design by
//  Sanjay Ghemawat, Jeff Dean, and others.
//
// A proto file we will use for unit testing.
//
// LINT: ALLOW_GROUPS, LEGACY_NAMES

import {BarRequest, BarResponse, FooRequest, FooResponse} from "./unittest_pb.js";
import {MethodKind} from "@bufbuild/protobuf";

/**
 * @generated from service protobuf_unittest.TestService
 */
export const TestService = {
    typeName: "protobuf_unittest.TestService",
    methods: {
        /**
         * @generated from rpc protobuf_unittest.TestService.Foo
         */
        foo: {
            name: "Foo",
            I: FooRequest,
            O: FooResponse,
            kind: MethodKind.Unary,
        },
        /**
         * @generated from rpc protobuf_unittest.TestService.Bar
         */
        bar: {
            name: "Bar",
            I: BarRequest,
            O: BarResponse,
            kind: MethodKind.Unary,
        },
    }
} as const;

