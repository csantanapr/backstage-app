// @ts-nocheck
/**
 * Argo Workflows API
 * Argo Workflows is an open source container-native workflow engine for orchestrating parallel jobs on Kubernetes. For more information, please see https://argoproj.github.io/argo-workflows/
 *
 * The version of the OpenAPI document: VERSION
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { IoArgoprojEventsV1alpha1EventSourceFilter } from './ioArgoprojEventsV1alpha1EventSourceFilter';
import { IoK8sApiCoreV1SecretKeySelector } from './ioK8sApiCoreV1SecretKeySelector';

/**
* GenericEventSource refers to a generic event source. It can be used to implement a custom event source.
*/
export class IoArgoprojEventsV1alpha1GenericEventSource {
    'authSecret'?: IoK8sApiCoreV1SecretKeySelector;
    'config'?: string;
    'filter'?: IoArgoprojEventsV1alpha1EventSourceFilter;
    /**
    * Insecure determines the type of connection.
    */
    'insecure'?: boolean;
    'jsonBody'?: boolean;
    'metadata'?: { [key: string]: string; };
    /**
    * URL of the gRPC server that implements the event source.
    */
    'url'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "authSecret",
            "baseName": "authSecret",
            "type": "IoK8sApiCoreV1SecretKeySelector"
        },
        {
            "name": "config",
            "baseName": "config",
            "type": "string"
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "IoArgoprojEventsV1alpha1EventSourceFilter"
        },
        {
            "name": "insecure",
            "baseName": "insecure",
            "type": "boolean"
        },
        {
            "name": "jsonBody",
            "baseName": "jsonBody",
            "type": "boolean"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojEventsV1alpha1GenericEventSource.attributeTypeMap;
    }
}
