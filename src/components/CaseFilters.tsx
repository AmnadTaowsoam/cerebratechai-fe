'use client';
import { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CASES, getAllSectors, getAllSolutionFamilies, getAllDataSensitivities } from '@/data/cases';

interface CaseFiltersProps {
  locale?: string;
  onFilterChange: (filters: FilterState) => void;
}

interface FilterState {
  sector: string;
  solutionFamily: string;
  dataSensitivity: string;
  outcomeType: string;
  sort: string;
}

const outcomeTypes = ['Accuracy', 'Time', 'Cost', 'Compliance'];
const sortOptions = ['Most relevant', 'Newest', 'Highest impact'];

export default function CaseFilters({ locale = 'en', onFilterChange }: CaseFiltersProps) {
  const isThai = locale === 'th';
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    sector: '',
    solutionFamily: '',
    dataSensitivity: '',
    outcomeType: '',
    sort: 'Most relevant'
  });

  const sectors = getAllSectors();
  const solutionFamilies = getAllSolutionFamilies();
  const dataSensitivities = getAllDataSensitivities();

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      sector: '',
      solutionFamily: '',
      dataSensitivity: '',
      outcomeType: '',
      sort: 'Most relevant'
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  const hasActiveFilters = Object.values(filters).some(value => value && value !== 'Most relevant');

  return (
    <>
      {/* Desktop Filters */}
      <div className="hidden md:block sticky top-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                {isThai ? 'กรอง' : 'Filters'}
              </Button>
              
              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="flex items-center gap-2 text-text-muted hover:text-text"
                >
                  <X className="h-4 w-4" />
                  {isThai ? 'ล้างทั้งหมด' : 'Clear all'}
                </Button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-text-muted">{isThai ? 'เรียงตาม:' : 'Sort by:'}</span>
              <select
                value={filters.sort}
                onChange={(e) => handleFilterChange('sort', e.target.value)}
                className="bg-surface border border-white/10 rounded px-3 py-1 text-sm text-text"
              >
                {sortOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          {isOpen && (
            <Card className="mt-4 border border-white/10 bg-surface/80">
              <CardContent className="p-6">
                <div className="grid gap-6 lg:grid-cols-4">
                  {/* Sector Filter */}
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      {isThai ? 'อุตสาหกรรม' : 'Sector'}
                    </label>
                    <select
                      value={filters.sector}
                      onChange={(e) => handleFilterChange('sector', e.target.value)}
                      className="w-full bg-surface border border-white/10 rounded px-3 py-2 text-sm text-text"
                    >
                      <option value="">{isThai ? 'ทั้งหมด' : 'All sectors'}</option>
                      {sectors.map(sector => (
                        <option key={sector} value={sector}>{sector}</option>
                      ))}
                    </select>
                  </div>

                  {/* Solution Family Filter */}
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      {isThai ? 'ประเภทโซลูชัน' : 'Solution Family'}
                    </label>
                    <select
                      value={filters.solutionFamily}
                      onChange={(e) => handleFilterChange('solutionFamily', e.target.value)}
                      className="w-full bg-surface border border-white/10 rounded px-3 py-2 text-sm text-text"
                    >
                      <option value="">{isThai ? 'ทั้งหมด' : 'All solutions'}</option>
                      {solutionFamilies.map(family => (
                        <option key={family} value={family}>{family}</option>
                      ))}
                    </select>
                  </div>

                  {/* Data Sensitivity Filter */}
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      {isThai ? 'ความไวของข้อมูล' : 'Data Sensitivity'}
                    </label>
                    <select
                      value={filters.dataSensitivity}
                      onChange={(e) => handleFilterChange('dataSensitivity', e.target.value)}
                      className="w-full bg-surface border border-white/10 rounded px-3 py-2 text-sm text-text"
                    >
                      <option value="">{isThai ? 'ทั้งหมด' : 'All types'}</option>
                      {dataSensitivities.map(sensitivity => (
                        <option key={sensitivity} value={sensitivity}>{sensitivity}</option>
                      ))}
                    </select>
                  </div>

                  {/* Outcome Type Filter */}
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      {isThai ? 'ประเภทผลลัพธ์' : 'Outcome Type'}
                    </label>
                    <select
                      value={filters.outcomeType}
                      onChange={(e) => handleFilterChange('outcomeType', e.target.value)}
                      className="w-full bg-surface border border-white/10 rounded px-3 py-2 text-sm text-text"
                    >
                      <option value="">{isThai ? 'ทั้งหมด' : 'All outcomes'}</option>
                      {outcomeTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Mobile Filters */}
      <div className="md:hidden sticky top-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              {isThai ? 'กรอง' : 'Filters'}
            </Button>
            
            <div className="flex items-center gap-2">
              <select
                value={filters.sort}
                onChange={(e) => handleFilterChange('sort', e.target.value)}
                className="bg-surface border border-white/10 rounded px-2 py-1 text-xs text-text"
              >
                {sortOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          {isOpen && (
            <div className="mt-3 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <select
                  value={filters.sector}
                  onChange={(e) => handleFilterChange('sector', e.target.value)}
                  className="w-full bg-surface border border-white/10 rounded px-2 py-2 text-xs text-text"
                >
                  <option value="">{isThai ? 'อุตสาหกรรม' : 'Sector'}</option>
                  {sectors.map(sector => (
                    <option key={sector} value={sector}>{sector}</option>
                  ))}
                </select>

                <select
                  value={filters.solutionFamily}
                  onChange={(e) => handleFilterChange('solutionFamily', e.target.value)}
                  className="w-full bg-surface border border-white/10 rounded px-2 py-2 text-xs text-text"
                >
                  <option value="">{isThai ? 'โซลูชัน' : 'Solution'}</option>
                  {solutionFamilies.map(family => (
                    <option key={family} value={family}>{family}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <select
                  value={filters.dataSensitivity}
                  onChange={(e) => handleFilterChange('dataSensitivity', e.target.value)}
                  className="w-full bg-surface border border-white/10 rounded px-2 py-2 text-xs text-text"
                >
                  <option value="">{isThai ? 'ข้อมูล' : 'Data'}</option>
                  {dataSensitivities.map(sensitivity => (
                    <option key={sensitivity} value={sensitivity}>{sensitivity}</option>
                  ))}
                </select>

                <select
                  value={filters.outcomeType}
                  onChange={(e) => handleFilterChange('outcomeType', e.target.value)}
                  className="w-full bg-surface border border-white/10 rounded px-2 py-2 text-xs text-text"
                >
                  <option value="">{isThai ? 'ผลลัพธ์' : 'Outcome'}</option>
                  {outcomeTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="w-full flex items-center justify-center gap-2 text-text-muted hover:text-text"
                >
                  <X className="h-4 w-4" />
                  {isThai ? 'ล้างทั้งหมด' : 'Clear all'}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
