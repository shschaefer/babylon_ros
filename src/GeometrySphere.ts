import * as BABYLON from 'babylonjs';
import { Material } from './Material';
import { IGeometry } from "./IGeometry";

export class Sphere implements IGeometry {
    public length : number = 0;
    public radius : number = 0;


    public mesh: BABYLON.AbstractMesh | undefined = undefined;
    public transform : BABYLON.TransformNode | undefined;

    constructor(r: number) {
        this.radius = r;
    }
    
    public create(scene: BABYLON.Scene, mat: Material) : void {
        this.transform = new BABYLON.TransformNode("mesh_sphere", scene);

        this.mesh = BABYLON.MeshBuilder.CreateSphere("sphere", 
            {
                diameter: this.radius * 2.0,
            }, scene);

        this.mesh.material = mat.material as BABYLON.Material;
        this.mesh.parent = this.transform;
    }
}