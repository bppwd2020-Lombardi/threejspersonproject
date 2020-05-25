var coneGeometry = new THREE.ConeGeometry( 1, 3, 6 );
			var coneLineEdges = new THREE.EdgesGeometry( coneGeometry );
			var coneMaterial = new THREE.MeshPhongMaterial(  { color:  Math.random() * 0xffffff});// random color
			var coneOutline = new THREE.LineSegments( coneLineEdges, new THREE.LineBasicMaterial( { color: 000000} ) );
			var cone = new THREE.Mesh(coneGeometry, coneMaterial)
			scene.add( cone );
			scene.add( coneOutline );


			var cubeGeometry = new THREE.BoxBufferGeometry( 1, 1, 1 );
			var cubeMaterial = new THREE.MeshPhongMaterial ( { color:  Math.random() * 0xffffff} );// random color
			var cubeLineEdges = new THREE.EdgesGeometry( cubeGeometry );
			var cubeOutline= new THREE.LineSegments( cubeLineEdges, new THREE.LineBasicMaterial( {color: 000000} ) ); 
			var cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
			scene.add(cube);
			scene.add( cubeOutline );


			var cylinderGeometry = new THREE.CylinderBufferGeometry( 1, 1, 4, 6 );
			var cylinderLineEdges = new THREE.EdgesGeometry( cylinderGeometry );
			var cylinderMaterial = new THREE.MeshPhongMaterial ( { color:  Math.random() * 0xffffff} );// random color
			var cylinderOutline = new THREE.LineSegments( cylinderLineEdges,new THREE.LineBasicMaterial( { color: 000000} ) );
			var cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
			scene.add( cylinder );
			scene.add( cylinderOutline );


			var sphereGeometry = new THREE.SphereGeometry( 1, 32, 22 );
			var sphereMaterial = new THREE.MeshPhongMaterial ( { color:  Math.random() * 0xffffff} );// random color
			var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
			scene.add( sphere );


			var icosahedronGeometry = new THREE.IcosahedronGeometry(1);
			var icosahedronMaterial = new THREE.MeshPhongMaterial ( { color:  Math.random() * 0xffffff} );
			var icosahedronLineEdges = new THREE.EdgesGeometry( icosahedronGeometry );
			var icosahedronOutline = new THREE.LineSegments( icosahedronLineEdges ,new THREE.LineBasicMaterial( { color: 000000 } ) );// random color
			var icosahedron = new THREE.Mesh(icosahedronGeometry, icosahedronMaterial);
			scene.add( icosahedron );
			scene.add( icosahedronOutline );


			var dodecahedronGeometry = new THREE.DodecahedronGeometry(1);
			var dodecahedronMaterial = new THREE.MeshPhongMaterial ( { color:  Math.random() * 0xffffff} );
			var dodecahedronLineEdges = new THREE.EdgesGeometry( dodecahedronGeometry );
			var dodecahedronOutline = new THREE.LineSegments( dodecahedronLineEdges ,new THREE.LineBasicMaterial( { color: 000000} ) );// random color
			var dodecahedron = new THREE.Mesh(dodecahedronGeometry, dodecahedronMaterial);
			scene.add( dodecahedron );
			scene.add( dodecahedronOutline );


			var tetrahedronGeometry = new THREE.TetrahedronGeometry(1);
			var tetrahedronMaterial = new THREE.MeshPhongMaterial ( { color:  Math.random() * 0xffffff} );
			var tetrahedronLineEdges = new THREE.EdgesGeometry( tetrahedronGeometry );
			var tetrahedronOutline = new THREE.LineSegments( tetrahedronLineEdges ,new THREE.LineBasicMaterial( { color: 000000} ) );// random color
			var tetrahedron = new THREE.Mesh(tetrahedronGeometry, tetrahedronMaterial);
			scene.add( tetrahedron );
			scene.add( tetrahedronOutline );


			var octahedronGeometry = new THREE.OctahedronGeometry(1);
			var octahedronMaterial = new THREE.MeshPhongMaterial ( { color:  Math.random() * 0xffffff} );
			var octahedronLineEdges = new THREE.EdgesGeometry( octahedronGeometry );
			var octahedronOutline = new THREE.LineSegments( octahedronLineEdges ,new THREE.LineBasicMaterial( { color: 000000} ) );// random color
			var octahedron = new THREE.Mesh(octahedronGeometry, octahedronMaterial)
			scene.add( octahedron );
			scene.add( octahedronOutline );

		
			var torusGeometry = new THREE.TorusGeometry(1, 0.4, 16, 50);
			var torusMaterial = new THREE.MeshPhongMaterial ( { color:  Math.random() * 0xffffff} );
			var torus = new THREE.Mesh(torusGeometry, torusMaterial)

			scene.add( torus );

			function animate{

				coneOutline.position.x = 0 // middle object
					cone.position.x = 0 // middle object

					coneOutline.rotation.x += speed
					coneOutline.rotation.y += speed
					cone.rotation.x += speed
					cone.rotation.y += speed


					cube.position.x = -4
					cubeOutline.position.x = -4 // left object

					cube.rotation.x += speed;
					cube.rotation.y += speed;
					cubeOutline.rotation.x += speed;
					cubeOutline.rotation.y += speed;


					cylinder.position.y = 4 
					cylinderOutline.position.y = 4// upper objcet

					cylinder.rotation.x += speed
					cylinder.rotation.y += speed
					cylinderOutline.rotation.x += speed
					cylinderOutline.rotation.y += speed


					sphere.position.y = -4 // lower object

					sphere.rotation.x += speed
					sphere.rotation.y += speed


					icosahedron.position.x = 4 // right object
					icosahedronOutline.position.x = 4


					icosahedron.rotation.x += speed
					icosahedron.rotation.y += speed
					icosahedronOutline.rotation.x += speed
					icosahedronOutline.rotation.y += speed


					dodecahedron.position.x = 4 // upper right object
					dodecahedron.position.y = 4
					dodecahedronOutline.position.x = 4 
					dodecahedronOutline.position.y = 4

					dodecahedron.rotation.x += speed
					dodecahedron.rotation.y += speed
					dodecahedronOutline.rotation.x += speed
					dodecahedronOutline.rotation.y += speed


					tetrahedron.position.x = 4 // lower right object
					tetrahedron.position.y = -4
					tetrahedronOutline.position.x = 4
					tetrahedronOutline.position.y = -4

					tetrahedron.rotation.x += speed
					tetrahedron.rotation.y += speed
					tetrahedronOutline.rotation.x += speed
					tetrahedronOutline.rotation.y += speed


					octahedron.position.x = -4
					octahedron.position.y = -4
					octahedronOutline.position.x = -4
					octahedronOutline.position.y = -4

					octahedron.rotation.x += speed
					octahedron.rotation.y += speed
					octahedronOutline.rotation.x += speed
					octahedronOutline.rotation.y += speed

					torus.position.x = -4
					torus.position.y = 4

					torus.rotation.x += speed
					torus.rotation.y += speed

			}