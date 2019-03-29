process.env.NODE_ENV = 'test';

const chai = require('chai'),
      chaiHttp = require('chai-http'),
      should = chai.should(),
      server = require('../index'),
      {Matriculas} = require("../models");

chai.use(chaiHttp);

describe('Matriculas', () => {
    beforeEach((done) => {
        Matriculas.remove({}, (err) => { 
           done();           
        });        
    });
  describe('/GET matriculas', () => {
      it('it should GET all the matriculas', done => {
            chai.request(server)
            .get('/api/matriculas')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(0);
              done();
            });
      });
  });
  describe('/POST matriculas', () => {
      it('it should not POST with if missing a field', done => {
            let matricula = new Matriculas({
               nombre: "Tester1", 
               apellido: "Test", 
               nacimiento: "14/02/1954", 
               lugarNacimiento: "Brazil",
               genero: "Masculino",
               correo: "ffwde@uin.com",
               identificacion: "fwdee",
               direccion: "fwfeewffe",
               telefono: "cwwe",
               aceptado: false
            });
            chai.request(server)
            .post('/api/matriculas')
            .send(matricula)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('errors');
                  res.body.errors.should.have.property('nombre');
                  res.body.errors.pages.should.have.property('kind').eql('required');
              done();
            });
      });
  });
  describe('/GET/:id matriculas', () => {
      it('it should GET a matricula by the given id', done => {
          let matricula = new Matriculas({
             nombre: "Tester2", 
             apellido: "Test", 
             nacimiento: "14/02/1954", 
             lugarNacimiento: "Brazil",
             genero: "Masculino",
             correo: "ffwe@uin.com",
             identificacion: "fwee",
             direccion: "fwfeewffe",
             telefono: "cwwe",
             aceptado: false
            });
          matricula.save((err, matricula) => {
              chai.request(server)
            .get('/api/matriculas/' + matricula.id)
            .send(matricula)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('nombre');
                  res.body.should.have.property('apellido');
                  res.body.should.have.property('nacimiento');
                  res.body.should.have.property('lugarNacimiento');
                  res.body.should.have.property('genero');
                  res.body.should.have.property('correo');
                  res.body.should.have.property('identificacion');
                  res.body.should.have.property('direccion');
                  res.body.should.have.property('telefono');
                  res.body.should.have.property('_id').eql(matricula.id);
              done();
            });
          });

      });
  });
  describe('/PUT/:id matricula', () => {
      it('it should UPDATE a matricula given the id', (done) => {
         let matricula = new Matriculas({
            nombre: "Tester3", 
            apellido: "Test", 
            nacimiento: "14/02/1954", 
            lugarNacimiento: "Brazil",
            genero: "Masculino",
            correo: "ffwefw@uin.com",
            identificacion: "fwwwewee",
            direccion: "fwfeewffe",
            telefono: "cwwe",
            aceptado: false
           });
          matricula.save((err, matricula) => {
                chai.request(server)
                .put('/matriculas/' + matricula.id)
                .send({aceptado: true})
                .end((err, res) => {
                      res.should.have.status(200);
                      res.body.should.be.a('object');
                      res.body.should.have.property('aceptado').eql(true);
                      res.body.matricula.should.have.property('year').eql(1950);
                  done();
                });
          });
      });
  });
  describe('/DELETE/:id matricula', () => {
      it('it should DELETE a matricula given the id', (done) => {
         let matricula = new Matriculas({
            nombre: "Tester4", 
            apellido: "Test", 
            nacimiento: "14/02/1954", 
            lugarNacimiento: "Brazil",
            genero: "Masculino",
            correo: "ffd22cwe@uin.com",
            identificacion: "fwed2d32e",
            direccion: "fwfeewffe",
            telefono: "cwwe",
            aceptado: false
           });
          matricula.save((err, matricula) => {
                chai.request(server)
                .delete('/api/matriculas/' + matricula.id)
                .end((err, res) => {
                      res.should.have.status(200);
                      res.body.should.be.a('object');
                      res.body.result.should.have.property('ok').eql(1);
                      res.body.result.should.have.property('n').eql(1);
                  done();
                });
          });
      });
  });
});
