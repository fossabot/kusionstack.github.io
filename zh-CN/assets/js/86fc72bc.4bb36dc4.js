"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[817],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),i=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=i(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),s=i(r),c=n,k=s["".concat(d,".").concat(c)]||s[c]||p[c]||l;return r?a.createElement(k,o(o({ref:t},m),{},{components:r})):a.createElement(k,o({ref:t},m))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=s;var u={};for(var d in t)hasOwnProperty.call(t,d)&&(u[d]=t[d]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var i=2;i<l;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},36134:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const l={},o="volume",u={unversionedId:"reference/model/kusion_kubernetes/api/core/v1/doc_volume",id:"reference/model/kusion_kubernetes/api/core/v1/doc_volume",title:"volume",description:"Source: base/pkg/kusionkubernetes/api/core/v1/volume.k",source:"@site/docs/reference/model/kusion_kubernetes/api/core/v1/doc_volume.md",sourceDirName:"reference/model/kusion_kubernetes/api/core/v1",slug:"/reference/model/kusion_kubernetes/api/core/v1/doc_volume",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/core/v1/doc_volume",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/core/v1/doc_volume.md",tags:[],version:"current",lastUpdatedBy:"amyxia",lastUpdatedAt:1685537782,formattedLastUpdatedAt:"2023/5/31",frontMatter:{},sidebar:"reference",previous:{title:"typed_local_object_reference",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/core/v1/doc_typed_local_object_reference"},next:{title:"volume_device",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/core/v1/doc_volume_device"}},d={},i=[{value:"Schema Volume",id:"schema-volume",level:2},{value:"Attributes",id:"attributes",level:3}],m={toc:i};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"volume"},"volume"),(0,n.kt)("p",null,"Source: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/core/v1/volume.k"},"base/pkg/kusion_kubernetes/api/core/v1/volume.k")),(0,n.kt)("p",null,"This is the volume module in kusion","_","kubernetes.api.core.v1 package.",(0,n.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,n.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,n.kt)("h2",{id:"schema-volume"},"Schema Volume"),(0,n.kt)("p",null,"Volume represents a named volume in a pod that may be accessed by any container in the pod."),(0,n.kt)("h3",{id:"attributes"},"Attributes"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"name"),(0,n.kt)("br",null),"     Volume's name. Must be a DNS","_","LABEL and unique within the pod. More info: ",(0,n.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/%5C#names"},"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/\\#names"),(0,n.kt)("br",null),"awsElasticBlockStore : AWSElasticBlockStoreVolumeSource, default is Undefined, optional",(0,n.kt)("br",null),"     AWSElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: ",(0,n.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/storage/volumes%5C#awselasticblockstore"},"https://kubernetes.io/docs/concepts/storage/volumes\\#awselasticblockstore"),(0,n.kt)("br",null),"azureDisk : AzureDiskVolumeSource, default is Undefined, optional",(0,n.kt)("br",null),"     AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.",(0,n.kt)("br",null),"azureFile : AzureFileVolumeSource, default is Undefined, optional",(0,n.kt)("br",null),"     AzureFile represents an Azure File Service mount on the host and bind mount to the pod.",(0,n.kt)("br",null),"cephfs : CephFSVolumeSource, default is Undefined, optional",(0,n.kt)("br",null),"     CephFS represents a Ceph FS mount on the host that shares a pod's lifetime",(0,n.kt)("br",null),"cinder : CinderVolumeSource, default is Undefined, optional",(0,n.kt)("br",null),"     Cinder represents a cinder volume attached and mounted on kubelets host machine. More info: ",(0,n.kt)("a",{parentName:"td",href:"https://examples.k8s.io/mysql-cinder-pd/README.md"},"https://examples.k8s.io/mysql-cinder-pd/README.md"),(0,n.kt)("br",null),"configMap : ConfigMapVolumeSource, default is Undefined, optional",(0,n.kt)("br",null),"     ConfigMap represents a configMap that should populate this volume",(0,n.kt)("br",null),"csi : CSIVolumeSource, default is Undefined, optional",(0,n.kt)("br",null),"     CSI (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers (Beta feature).",(0,n.kt)("br",null),"downwardAPI : DownwardAPIVolumeSource, default is Undefined, optional",(0,n.kt)("br",null),"     DownwardAPI represents downward API about the pod that should populate this volume",(0,n.kt)("br",null),"emptyDir : EmptyDirVolumeSource, default is Undefined, optional",(0,n.kt)("br",null),"     EmptyDir represents a temporary directory that shares a pod's lifetime. More info: ",(0,n.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/storage/volumes%5C#emptydir"},"https://kubernetes.io/docs/concepts/storage/volumes\\#emptydir"),(0,n.kt)("br",null),"ephemeral : EphemeralVolumeSource, default is Undefined, optional",(0,n.kt)("br",null),"     Ephemeral represents a volume that is handled by a cluster storage driver. The volume's lifecycle is tied to the pod that defines it - it will be created before the pod starts, and deleted when the pod is removed."),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"required"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"awsElasticBlockStore")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"doc_aws_elastic_block_store_volume_source#schema-awselasticblockstorevolumesource"},"AWSElasticBlockStoreVolumeSource")),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"azureDisk")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"doc_azure_disk_volume_source#schema-azurediskvolumesource"},"AzureDiskVolumeSource")),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"azureFile")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"doc_azure_file_volume_source#schema-azurefilevolumesource"},"AzureFileVolumeSource")),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"cephfs")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"doc_ceph_fs_volume_source#schema-cephfsvolumesource"},"CephFSVolumeSource")),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"cinder")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"doc_cinder_volume_source#schema-cindervolumesource"},"CinderVolumeSource")),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"configMap")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"doc_config_map_volume_source#schema-configmapvolumesource"},"ConfigMapVolumeSource")),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"csi")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"doc_csi_volume_source#schema-csivolumesource"},"CSIVolumeSource")),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"downwardAPI")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"doc_downward_api_volume_source#schema-downwardapivolumesource"},"DownwardAPIVolumeSource")),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"emptyDir")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"doc_empty_dir_volume_source#schema-emptydirvolumesource"},"EmptyDirVolumeSource")),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"ephemeral")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"doc_ephemeral_volume_source#schema-ephemeralvolumesource"},"EphemeralVolumeSource")),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"fc")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"doc_fc_volume_source#schema-fcvolumesource"},"FCVolumeSource")),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"flexVolume")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"doc_flex_volume_source#schema-flexvolumesource"},"FlexVolumeSource")),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"flocker")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"doc_flocker_volume_source#schema-flockervolumesource"},"FlockerVolumeSource")),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"gcePersistentDisk")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"doc_gce_persistent_disk_volume_source#schema-gcepersistentdiskvolumesource"},"GCEPersistentDiskVolumeSource")),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"gitRepo")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"doc_git_repo_volume_source#schema-gitrepovolumesource"},"GitRepoVolumeSource")),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"glusterfs")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"doc_glusterfs_volume_source#schema-glusterfsvolumesource"},"GlusterfsVolumeSource")),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"hostPath")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"doc_host_path_volume_source#schema-hostpathvolumesource"},"HostPathVolumeSource")),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"iscsi")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"doc_iscsi_volume_source#schema-iscsivolumesource"},"ISCSIVolumeSource")),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"nfs")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"doc_nfs_volume_source#schema-nfsvolumesource"},"NFSVolumeSource")),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"persistentVolumeClaim")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"doc_persistent_volume_claim_volume_source#schema-persistentvolumeclaimvolumesource"},"PersistentVolumeClaimVolumeSource")),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"photonPersistentDisk")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"doc_photon_persistent_disk_volume_source#schema-photonpersistentdiskvolumesource"},"PhotonPersistentDiskVolumeSource")),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"portworxVolume")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"doc_portworx_volume_source#schema-portworxvolumesource"},"PortworxVolumeSource")),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"projected")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"doc_projected_volume_source#schema-projectedvolumesource"},"ProjectedVolumeSource")),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"quobyte")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"doc_quobyte_volume_source#schema-quobytevolumesource"},"QuobyteVolumeSource")),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"rbd")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"doc_rbd_volume_source#schema-rbdvolumesource"},"RBDVolumeSource")),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"scaleIO")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"doc_scale_io_volume_source#schema-scaleiovolumesource"},"ScaleIOVolumeSource")),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"secret")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"doc_secret_volume_source#schema-secretvolumesource"},"SecretVolumeSource")),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"storageos")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"doc_storage_os_volume_source#schema-storageosvolumesource"},"StorageOSVolumeSource")),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"vsphereVolume")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"doc_vsphere_virtual_disk_volume_source#schema-vspherevirtualdiskvolumesource"},"VsphereVirtualDiskVolumeSource")),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")))))}p.isMDXComponent=!0}}]);