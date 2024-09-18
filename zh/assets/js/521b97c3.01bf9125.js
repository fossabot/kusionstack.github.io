"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[36555],{53297:e=>{e.exports=JSON.parse('{"pluginId":"kuperator","version":"v0.6","label":"v0.6","banner":null,"badge":true,"noIndex":false,"className":"docs-version-v0.6","isLast":true,"docsSidebars":{"kuperator":[{"type":"link","label":"Introduction","href":"/zh/kuperator/introduction/","docId":"introduction/introduction"},{"type":"category","label":"Getting Started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Installation","href":"/zh/kuperator/started/install","docId":"started/install"},{"type":"link","label":"Using KusionStack Kuperator to operate Pods gracefully","href":"/zh/kuperator/started/demo-graceful-operation","docId":"started/demo-graceful-operation"}]},{"type":"category","label":"Concepts","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"PodOpsLifecycle","href":"/zh/kuperator/concepts/podopslifecycle","docId":"concepts/podopslifecycle"}]},{"type":"category","label":"Manuals","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"CollaSet","href":"/zh/kuperator/manuals/collaset","docId":"manuals/collaset"},{"type":"link","label":"PodDecoration","href":"/zh/kuperator/manuals/poddecoration","docId":"manuals/poddecoration"},{"type":"link","label":"OperationJob","href":"/zh/kuperator/manuals/operationjob","docId":"manuals/operationjob"},{"type":"link","label":"PodTransitionRule","href":"/zh/kuperator/manuals/podtransitionrule","docId":"manuals/podtransitionrule"},{"type":"link","label":"ResourceConsist","href":"/zh/kuperator/manuals/resourceconsist","docId":"manuals/resourceconsist"}]}]},"docs":{"concepts/podopslifecycle":{"id":"concepts/podopslifecycle","title":"PodOpsLifecycle","description":"Background","sidebar":"kuperator"},"introduction/introduction":{"id":"introduction/introduction","title":"What is KusionStack Kuperator?","description":"KusionStack Kuperator consists of workloads and operators built on Kubernetes Custom Resource Definitions,","sidebar":"kuperator"},"manuals/collaset":{"id":"manuals/collaset","title":"CollaSet","description":"CollaSet is responsible for managing a set of Pods. Similar to Kubernetes Deployment and StatefulSet, it also supports scaling and updating Pods. Additionally, CollaSet offers advanced features to provide users with more granular control over managing Pods.","sidebar":"kuperator"},"manuals/operationjob":{"id":"manuals/operationjob","title":"OperationJob","description":"The OperationJob Workload is responsible for performing one-shot operational tasks on a batch of Pods, providing scaffolding for Pod operation scenarios to reduce user development costs.","sidebar":"kuperator"},"manuals/poddecoration":{"id":"manuals/poddecoration","title":"PodDecoration","description":"PodDecoration works in conjunction with CollaSet to selectively inject specific configurations to Pods that meet certain criteria.","sidebar":"kuperator"},"manuals/podtransitionrule":{"id":"manuals/podtransitionrule","title":"PodTransitionRule","description":"In normal pod lifecycle,  some phases are defined. For example, K8s Pods follow a defined lifecycle\uff0cstarting in the Pending phase, moving through Running if at least one of its primary containers starts OK, and then through either the Succeeded or Failed phases depending on whether any container in the Pod terminated in failure.","sidebar":"kuperator"},"manuals/resourceconsist":{"id":"manuals/resourceconsist","title":"ResourceConsist","description":"ResourceConsist aims to make a customized controller can be realized easily, and offering the ability of following","sidebar":"kuperator"},"started/demo-graceful-operation":{"id":"started/demo-graceful-operation","title":"Using KusionStack Kuperator to operate Pods gracefully","description":"Applications always provide its service along with traffic routing.","sidebar":"kuperator"},"started/install":{"id":"started/install","title":"Installation","description":"Install with helm","sidebar":"kuperator"}}}')}}]);