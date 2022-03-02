/* eslint-disable */
// @generated by protoc-gen-connect-web v0.0.1 with parameter "ts_nocheck=false"
// @generated from file extra/service-example.proto (package spec, syntax proto3)

import {ExampleRequest, ExampleResponse} from "./service-example_pb.js";
import {MethodKind} from "@bufbuild/protobuf";

/**
 * @generated from service spec.ExampleService
 */
export const ExampleService = {
    typeName: "spec.ExampleService",
    methods: {
        /**
         * @generated from rpc spec.ExampleService.Unary
         */
        unary: {
            name: "Unary",
            I: ExampleRequest,
            O: ExampleResponse,
            kind: MethodKind.Unary,
        },
        /**
         * @generated from rpc spec.ExampleService.ServerStream
         */
        serverStream: {
            name: "ServerStream",
            I: ExampleRequest,
            O: ExampleResponse,
            kind: MethodKind.ServerStreaming,
        },
        /**
         * @generated from rpc spec.ExampleService.ClientStream
         */
        clientStream: {
            name: "ClientStream",
            I: ExampleRequest,
            O: ExampleResponse,
            kind: MethodKind.ClientStreaming,
        },
        /**
         * @generated from rpc spec.ExampleService.Bidi
         */
        bidi: {
            name: "Bidi",
            I: ExampleRequest,
            O: ExampleResponse,
            kind: MethodKind.BiDiStreaming,
        },
    }
} as const;

