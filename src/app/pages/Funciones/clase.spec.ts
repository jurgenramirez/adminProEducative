import { obtenerParticipantes } from "./clase";


describe('Pruebas de que exista un profesor en clase',()=>{
        it('Debe retorna que exista 2 estudiantes en clase',()=>{
            const res = obtenerParticipantes();
            expect(res.length).toBeGreaterThanOrEqual(3);
        });
        it('debe de retornar si existe un profesor',()=>{
            const res = obtenerParticipantes();
            expect(res).toContain('Prof');
        });
});