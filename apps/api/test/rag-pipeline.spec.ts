import { RagPipelineService } from '../src/infrastructure/ai/rag-pipeline.service';

describe('RagPipelineService', () => {
  it('returns citations and non-empty answer', async () => {
    const service = new RagPipelineService();
    const response = await service.answer('fasting in ramadan', 'en');

    expect(response.answer.length).toBeGreaterThan(0);
    expect(response.citations.length).toBeGreaterThan(0);
  });

  it('handles fiqh-style prompt with guarded phrasing', async () => {
    const service = new RagPipelineService();
    const response = await service.answer('fiqh halal question', 'en');
    expect(response.answer.toLowerCase()).toContain('scholarly views differ');
  });
});
